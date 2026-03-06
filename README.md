🍔 FSW Foods

Aplicação web inspirada no iFood, desenvolvida com Next.js 14, permitindo que usuários naveguem por restaurantes, visualizem menus e realizem pedidos.

O projeto foi desenvolvido com foco em arquitetura moderna de aplicações web, utilizando Server Components, autenticação, ORM e UI moderna.

🚀 Tecnologias utilizadas
Frontend

Next.js 14

React 18

TypeScript

Tailwind CSS

Radix UI

Lucide Icons

Next Themes

Backend / Fullstack

Next.js Server Actions

Prisma ORM

NextAuth

PostgreSQL

Ferramentas de desenvolvimento

ESLint

Prettier

Husky

Lint-staged

Git Commit Msg Linter

🧠 Funcionalidades

Autenticação de usuários com NextAuth

Listagem de restaurantes

Visualização de categorias de produtos

Exibição de menus

Interface responsiva

Sistema de temas (dark/light)

UI moderna com Radix UI

Persistência de dados com Prisma

🗄 Banco de dados

Este projeto utiliza Prisma ORM para gerenciamento do banco de dados.

Gerar cliente Prisma
npx prisma generate
Rodar migrations
npx prisma migrate dev
Popular banco de dados (seed)
npx prisma db seed
⚙️ Instalação do projeto

Clone o repositório:

git clone https://github.com/seuusuario/fsw-foods.git

Entre na pasta:

cd fsw-foods

Instale as dependências:

npm install
🔐 Variáveis de ambiente

Crie um arquivo .env na raiz do projeto.

Exemplo:

DATABASE_URL="postgresql://user:password@localhost:5432/fswfoods"

NEXTAUTH_SECRET="secret"
NEXTAUTH_URL="http://localhost:3000"
▶️ Executando o projeto

Rodar em modo desenvolvimento:

npm run dev

Abrir no navegador:

http://localhost:3000
