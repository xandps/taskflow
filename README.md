📊 TaskFlow — Dashboard de Gestão de Tarefas

TaskFlow é um mini dashboard estilo SaaS para gerenciamento de tarefas, desenvolvido com Angular moderno, com foco em boas práticas, organização de código e experiência do usuário.

O objetivo do projeto é demonstrar domínio dos principais conceitos do Angular aplicados em um cenário realista de mercado.

🚀 Demonstração

Sites de grande exemplo seria DevAzure, jira entre outros...

🎯 Objetivo do Projeto

Este projeto foi criado com foco em portfólio profissional, buscando demonstrar:

Arquitetura organizada

Componentização correta

Uso de Angular moderno (Standalone Components)

Boas práticas de front-end

UI limpa e profissional

🧠 Funcionalidades

✅ Login visual (mock)

📋 Listagem de tarefas

➕ Criação de tarefas

✏️ Edição de tarefas

🗑️ Exclusão de tarefas

🔍 Filtro por status

💾 Persistência em LocalStorage

⏳ Estados de loading e empty state

🛠️ Tecnologias Utilizadas

Angular (Standalone Components)

TypeScript

RxJS

Angular Reactive Forms

Angular Router

LocalStorage

Angular Material ou Tailwind CSS (dependendo da versão)

HTML5 & CSS3

📁 Estrutura do Projeto
src/
 ├── app/
 │   ├── core/
 │   │   ├── models/
 │   │   │   └── task.model.ts
 │   │   ├── services/
 │   │   │   └── task.service.ts
 │   │   └── guards/
 │   │       └── auth.guard.ts
 │   │
 │   ├── features/
 │   │   └── tasks/
 │   │       ├── components/
 │   │       │   ├── task-card/
 │   │       │   └── task-form/
 │   │       ├── pages/
 │   │       │   ├── task-list.page.ts
 │   │       │   └── dashboard.page.ts
 │   │       └── services/
 │   │
 │   ├── shared/
 │   │   ├── components/
 │   │   ├── pipes/
 │   │   │   └── task-status.pipe.ts
 │   │   └── directives/
 │   │
 │   └── app.routes.ts


Essa separação facilita escalabilidade e manutenção, simulando um projeto real de produção.

🧩 Conceitos Angular Demonstrados

Standalone Components

Input & Output

Services e Injeção de Dependência

Reactive Forms

Pipes personalizados

RxJS (BehaviorSubject, Observable)

Roteamento

Guards (mock)

Boas práticas de organização

🎨 Interface

Layout estilo dashboard

Design limpo e moderno

Feedback visual (loading / empty state)

Tema escuro para estética profissional

Prints do projeto devem ser adicionados aqui 📸

▶️ Como Executar o Projeto
# Instalar dependências
npm install

# Rodar o projeto
ng serve


Acesse:

http://localhost:4200

🧪 Melhorias Futuras (Roadmap)

🔐 Autenticação real com JWT

🌐 Integração com API REST

📊 Gráficos de produtividade

📱 Responsividade mobile

🧪 Testes unitários com Jasmine/Karma

👨‍💻 Autor

Xand Sobral
Desenvolvedor Front-end / Full Stack
Angular • .NET • TypeScript

📌 Observação Final

Este projeto foi desenvolvido em curto prazo com foco em clareza, organização e boas práticas, simulando um ambiente profissional real.
