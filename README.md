This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# dbSecurity-bot
# ?? dbSecurity-bot

A modern and lightweight **REST API system for security management**, built with **Next.js 15** using App Router, TailwindCSS, and a local JSON-based database. Suitable for admin dashboards, internal tools, or bot integrations.

![License](https://img.shields.io/github/license/wa130/dbSecurity-bot?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/wa130/dbSecurity-bot?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/wa130/dbSecurity-bot?style=for-the-badge)

---

## ?? Features

- ✅ Add, edit, and delete security entries via REST API  
- ⚡ Built with **Next.js 15 (App Router)**  
- ?? Fully responsive dark UI using **TailwindCSS**  
- ?? Lightweight file-based JSON database  
- ?? Ready to integrate with admin panels or WhatsApp bots  

---

## ?? Project Structure

```
dbSecurity-bot/
├── app/
│   ├── api/security/       # API endpoints: add, edit, delete
│   ├── dashboard/          # Dashboard UI pages
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main landing page
├── utils/
│   └── db.ts               # Database helper (read/write JSON)
├── data/
│   └── security.json       # JSON file storing security data
├── public/                 # Static assets (images, favicon, etc.)
└── README.md
```

---

## ⚙️ Installation & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/wa130/dbSecurity-bot.git
cd dbSecurity-bot
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Then open your browser:  
?? http://localhost:3000

---

##  Screenshot

Example of the dashboard interface:

![Dashboard Preview](https://via.placeholder.com/1000x600?text=Preview+Dashboard+dbSecurity-bot)

> ?? Replace the placeholder above with your actual dashboard screenshot (upload it to `/public`).

---

## Join Our WhatsApp Channel

Stay updated with the latest features, tips, and bot news:  
 https://whatsapp.com/channel/0029Vb8W9HoB4hdKDbqoWI3m

---

## ?? License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software for personal or commercial use.

---

Built with ❤️ by [@wa130](https://github.com/wa130)
