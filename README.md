

# dbSecurity-bot
#  dbSecurity-bot

A modern and lightweight **REST API system for security management**, built with **Next.js 15** using App Router, TailwindCSS, and a local JSON-based database. Suitable for admin dashboards, internal tools, or bot integrations.

![License](https://img.shields.io/github/license/wa130/dbSecurity-bot?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/wa130/dbSecurity-bot?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/wa130/dbSecurity-bot?style=for-the-badge)

---

##  Features

- ✅ Add, edit, and delete security entries via REST API  
- ⚡ Built with **Next.js 15 (App Router)**  
- ?? Fully responsive dark UI using **TailwindCSS**  
- ?? Lightweight file-based JSON database  
- ?? Ready to integrate with admin panels or WhatsApp bots  

---

##  Project Structure

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

##  License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this software for personal or commercial use.

---

Built with ❤️ by [@wa130](https://github.com/wa130)
