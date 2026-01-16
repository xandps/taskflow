import { Injectable, inject, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface MockUser {
  email: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly SESSION_DURATION = 30 * 60 * 1000;
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private sessionTimeout?: number;

  private readonly TOKEN_KEY = 'taskflow_token';
  private readonly USER_KEY = 'taskflow_user';

  isLoggedIn = signal<boolean>(false);
  isReady = signal(false);

  constructor() {
    if (this.isBrowser) {
      this.restoreSession();
    }
    this.isReady.set(true);
  }

  login(email: string, password: string): boolean {
    if (!this.isBrowser) return false;

    if (email === 'admin@taskflow.com' && password === '123456') {
      const expiresAt = Date.now() + this.SESSION_DURATION;

      localStorage.setItem(this.TOKEN_KEY, 'mock-jwt-token');
      localStorage.setItem(
        this.USER_KEY,
        JSON.stringify({ email, name: 'Admin TaskFlow' })
      );
      localStorage.setItem('taskflow_expires_at', expiresAt.toString());

      this.isLoggedIn.set(true);

      this.startSessionTimer(expiresAt);

      return true;
    }

    return false;
  }

  private restoreSession(): void {
    if (!this.isBrowser) return;

    const token = localStorage.getItem(this.TOKEN_KEY);
    const expiresAt = localStorage.getItem('taskflow_expires_at');

    if (!token || !expiresAt) {
      this.isLoggedIn.set(false);
      return;
    }

    if (Date.now() > Number(expiresAt)) {
      this.clearSession();
      return;
    }

    this.isLoggedIn.set(true);
    this.startSessionTimer(Number(expiresAt));
  }


  private clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem('taskflow_expires_at');
    this.isLoggedIn.set(false);
  }

  logout(): void {
    if (!this.isBrowser) return;

    if (this.sessionTimeout) {
      clearTimeout(this.sessionTimeout);
    }

    this.clearSession();
  }

  getToken(): string | null {
    if (!this.isBrowser) return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): MockUser | null {
    if (!this.isBrowser) return null;

    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  private startSessionTimer(expiresAt: number) {
    const remaining = expiresAt - Date.now();
    this.sessionTimeout = window.setTimeout(() => {
      this.logout();
    }, remaining);
  }
}
