# 📊 TaskFlow — Dashboard de Gestão de Tarefas

TaskFlow é um **mini dashboard estilo SaaS** para gerenciamento de tarefas, desenvolvido com **Angular moderno**, com foco em **boas práticas, organização de código e experiência do usuário**.

O objetivo do projeto é demonstrar domínio dos principais conceitos do Angular aplicados em um cenário realista de mercado.

---

## 🚀 Demonstração
> (adicione aqui o link do deploy quando finalizar — Vercel / Netlify / GitHub Pages)

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com foco em **portfólio profissional**, buscando demonstrar:

- Arquitetura organizada
- Componentização correta
- Uso de Angular moderno (Standalone Components)
- Boas práticas de front-end
- UI limpa e profissional

---

## 🧠 Funcionalidades

- ✅ Login visual (mock)
- 📋 Listagem de tarefas
- ➕ Criação de tarefas
- ✏️ Edição de tarefas
- 🗑️ Exclusão de tarefas
- 🔍 Filtro por status
- 💾 Persistência em LocalStorage
- ⏳ Estados de loading e empty state

---

## 🛠️ Tecnologias Utilizadas

- Angular (Standalone Components)
- TypeScript
- RxJS
- Angular Reactive Forms
- Angular Router
- LocalStorage
- Angular Material ou Tailwind CSS
- HTML5 & CSS3

---

## 📁 Estrutura do Projeto

```txt
src/
 ├── app/
 │   ├── core/
 │   │   ├── models/
 │   │   │   └── task.model.ts
 │   │   ├── services/
 │   │   │   └── storage.service.ts
 │   │   └── guards/
 │   │       └── auth.guard.ts
 │   │
 │   ├── features/
 │   │   └── tasks/
 │   │       ├── pages/
 │   │       │   ├── task-list.page.ts
 │   │       │   └── dashboard.page.ts
 │   │       │
 │   │       ├── components/
 │   │       │   ├── task-card/
 │   │       │   └── task-form/
 │   │       │
 │   │       └── services/
 │   │           └── task.service.ts
 │   │
 │   ├── shared/
 │   │   ├── components/
 │   │   ├── pipes/
 │   │   │   └── task-status.pipe.ts
 │   │   └── directives/
 │   │       └── highlight.directive.ts
 │   │
 │   ├── app.routes.ts
 │   └── app.component.ts
```

Essa separação facilita escalabilidade e manutenção, simulando um projeto real de produção.

---

## 📐 Modelo de Dados (Task)

```ts
export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'done';
  createdAt: Date;
}
```

---

## 🧩 Conceitos Angular Demonstrados

- Standalone Components
- Input & Output
- Services e Injeção de Dependência
- Reactive Forms
- Pipes personalizados
- Directives customizadas
- RxJS (BehaviorSubject, Observable)
- Roteamento
- Guards (mock)
- Organização por features

---

## 🎨 Interface

- Layout estilo dashboard
- Design limpo e moderno
- Feedback visual (loading / empty state)
- Tema escuro para estética profissional

Adicione screenshots do projeto aqui 📸

---

## ▶️ Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Rodar o projeto
ng serve
```
Acesse:
```txt
http://localhost:4200
```

---

## 🧪 Melhorias Futuras (Roadmap)

- 🔐 Autenticação real com JWT
- 🌐 Integração com API REST
- 📊 Gráficos de produtividade
- 📱 Responsividade mobile
- 🧪 Testes unitários

---

## 👨‍💻 Autor

Xand Sobral

Desenvolvedor Front-end / Full Stack

Angular • .NET • TypeScript

---

## 📌 Observação Final

Este projeto foi desenvolvido em curto prazo com foco em clareza, organização e boas práticas, simulando um ambiente profissional real.
