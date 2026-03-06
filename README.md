🍔 FSW Foods

Aplicação web inspirada no iFood, desenvolvida com Next.js 14, permitindo que usuários naveguem por restaurantes, visualizem menus e realizem pedidos.

O projeto utiliza arquitetura moderna do Next.js (App Router), autenticação com NextAuth e persistência de dados com Prisma ORM.

🚀 Tecnologias

Next.js 14

React 18

TypeScript

TailwindCSS

Prisma ORM

NextAuth

Radix UI

PostgreSQL

🧠 Funcionalidades

Autenticação de usuários

Listagem de restaurantes

Visualização de categorias

Exibição de menus

Interface responsiva

Dark / Light mode

Persistência de dados com Prisma

⚙️ Como rodar o projeto

Clone o repositório:

git clone https://github.com/seuusuario/fsw-foods.git

Instale as dependências:

npm install

Configure o .env:

DATABASE_URL="postgresql://user:password@localhost:5432/fswfoods"

NEXTAUTH_SECRET="secret"
NEXTAUTH_URL="http://localhost:3000"

Execute o projeto:

npm run dev
