# 📦 ScaleBox - Micro SaaS

ScaleBox é um projeto de Micro SaaS desenvolvido com foco em oferecer uma base sólida e escalável para quem deseja iniciar um produto digital baseado em assinaturas. Ele integra autenticação, pagamentos recorrentes, webhooks e envio de e-mails — tudo utilizando ferramentas modernas do ecossistema web.

> 🎯 **Objetivo**: Criar uma aplicação SaaS funcional com tecnologias modernas e boas práticas, explorando integrações reais com plataformas como Stripe, Mercado Pago, Firebase e Resend.

---

## 🧠 Sobre o Projeto

A aplicação foi construída com base em um template gratuito disponível no Figma (veja abaixo), adaptando o design para uma stack moderna com foco em performance, segurança e escalabilidade. 

📘 Um guia breve sobre o processo de desenvolvimento e decisões técnicas pode ser acessado no Notion:  
👉 [Documentação Notion - ScaleBox](https://solid-orchid-835.notion.site/ScaleBox-Micro-SaaS-1d511734630680739be0d9d97a6c0839)

🎨 Template Figma utilizado:  
👉 [SaaS Landing Page Template no Figma](https://www.figma.com/design/Dg9XCDujF5OmCUpFuFEUjm/SaaS-Landing-Page-Template---Landing-Page-Template-ready-to-export-to-HTML---Landing-page-for-SaaS--Community-?m=auto&t=VcOnkzWgHK3fM0TQ-6)

---

## ✨ Funcionalidades

- ✅ Autenticação de usuários com Google e Firebase
- ✅ Assinaturas com Stripe e Mercado Pago
- ✅ Painel de planos e gerenciamento de assinaturas
- ✅ Webhooks para eventos de pagamento
- ✅ Envio de e-mails com Resend
- ✅ Interface moderna, responsiva e escalável

---

## 🧰 Tecnologias Utilizadas

- **Next.js 15** – Framework React fullstack
- **TypeScript** – Tipagem estática para maior confiabilidade
- **Tailwind CSS** – Estilização com produtividade
- **NextAuth** – Autenticação com suporte ao Firebase
- **Firebase Firestore** – Banco de dados em tempo real
- **Stripe** – Gateway de pagamento internacional
- **Mercado Pago** – Gateway de pagamento local (BR)
- **Webhooks** – Monitoramento de eventos de pagamento
- **Resend** – Envio de e-mails transacionais

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório
```bash
git clone https://github.com/Milimaverde/scalebox-micro-saas.git
cd scalebox-micro-saas
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e insira as seguintes variáveis:

```
# Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=

# NextAuth
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Mercado Pago
MERCADO_PAGO_ACCESS_TOKEN=
MERCADO_PAGO_WEBHOOK_URL=

# Resend
RESEND_API_KEY=
```

> ⚠️ As credenciais podem ser obtidas nas respectivas plataformas: Firebase, Stripe, Mercado Pago, Resend, etc.

### 4. Execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 🙌 Créditos

- Template Figma por [Community Creator no Figma](https://www.figma.com/community/file/1251045301968888259)
- Desenvolvido com ♥ por [Milimaverde](https://github.com/Milimaverde)
