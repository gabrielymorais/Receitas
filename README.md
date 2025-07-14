# 📖 Receitas Web

Um aplicativo web para **cadastrar, visualizar, editar e excluir receitas culinárias**, com suporte a **modo escuro**, **upload de imagens** e **armazenamento local**. Desenvolvido com ❤️ usando **Angular 20 (standalone components)**.

![Banner](./src/assets/banner.png) <!-- Coloque aqui uma imagem geral da aplicação -->

---

## 🚀 Funcionalidades

- 📋 Cadastro de receitas com imagem e categoria  
- 🔍 Listagem com **filtro por nome** e **categoria**  
- 🖼️ Upload de imagem **via URL ou arquivo local**
- 🌙 **Modo escuro** estilizado  
- ✏️ Edição de receitas  
- 🗑️ Exclusão com confirmação via modal  
- 💾 Armazenamento com `localStorage`

---

## 🧑‍🍳 Prints da aplicação

### 🌅 Tema Claro

 | Formulário de Cadastro | Modals  |
------------------------|------------------------|
| ![Cadastro](./src/assets/formlight.png) |![Cadastro](./src/assets/modal.png) |

### 🌙 Tema Escuro

| Visualização Detalhada | 
|------------------------|
| ![Detalhes](./src/assets/detaildark.png) |

---

## ⚙️ Como rodar o projeto

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) v18+  
- [Angular CLI](https://angular.io/cli) (v16+)

### 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/gabrielymorais/receitas-app.git
cd receitas-app
```
### 📦 Instalação de Dependencias
```bash
npm install
```

### ⚙️ Rode o Projeto
```bash
ng serve
```

## 📁 Estrutura de Pastas

```bash
📁src/
├── 📁app/
│   ├── 📁modal/       # Modal reutilizável para confirmações
│   │   ├── modal.ts
│   │   └── modal.html
│   ├── 📁recipe-detail/        # Tela de visualização detalhada da receita
│   │   ├── recipe-detail.ts
│   │   └── recipe-detail.html
│   ├── 📁recipe-form/          # Tela de cadastro e edição de receitas
│   │   ├── recipe-form.ts
│   │   └── recipe-form.html
│   ├── 📁recipes-list/         # Tela de listagem de todas as receitas
│   │   ├── recipes-list.ts
│   │   └── recipes-list.html
│   ├── app.config.ts         # Arquivo de configuração principal com rotas
│   └── app.ts                # Componente raiz da aplicação
├── 📁assets/                   # Recursos estáticos (imagens, ícones, etc)
├── index.html                # HTML principal da aplicação
└── styles.css                # Estilos globais da aplicação
```


## 🛠️ Tecnologias Usadas

| Tecnologia            | Descrição                                                                 |
|------------------------|---------------------------------------------------------------------------|
| ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) | Framework principal para criação da SPA |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Linguagem com tipagem estática utilizada no projeto |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Marcação das páginas |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Estilização moderna e responsiva |
| ![LocalStorage](https://img.shields.io/badge/LocalStorage-yellow?style=for-the-badge) | Armazenamento local das receitas no navegador |
| ![Angular Standalone](https://img.shields.io/badge/Standalone%20Components-20.0.0-blueviolet?style=for-the-badge) | Utilização do novo padrão de componentes standalone |
| 🌓 Modo Dark/Light    | Alternância de tema utilizando `ngClass` com estilos dinâmicos             |
| 💬 Modal Customizado  | Modal de confirmação feito artesanalmente (sem dependências externas)      |


## 🎥 Demonstração em Vídeo

Confira no vídeo abaixo como a aplicação funciona na prática:

> 🔗 Clique [aqui para assistir diretamente no YouTube](https://youtu.be/atSxz8aOEKI)

---


