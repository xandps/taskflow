import { Routes } from '@angular/router';
import { TaskManagerPage } from './features/tasks/pages/task-manager-page/task-manager-page';
import { LoginPage } from './features/tasks/pages/login-page/login-page';
import { AuthGuard } from './core/guards/auth-guards';

export const routes: Routes = [
  { path: 'tasks', component: TaskManagerPage, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
];