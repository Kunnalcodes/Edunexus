# 🎓 EDUNEXUS — Next-Generation Smart LMS & Distributed Learning Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748?logo=prisma)](https://www.prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render)](https://render.com/)

An enterprise-grade, multi-tenant Smart Learning Management System (LMS) and assessment platform engineered for higher education institutions, polytechnic universities, and global technical academies.

---

## 🌟 Core Highlights & Architectural Features

- **Multi-Tenant Academic Delivery**: Configurable for universities, academies, or research labs without code divergence.
- **Hands-On Virtual Labs**: Sandboxed environments with automated cryptographic flag-based capture (`NEXUS{...}`).
- **Timed Online Assessment Engine**: Balanced question bank generation, anti-cheat tab-switching detection, and instant server-side scoring.
- **Cryptographic Credential Verification**: SHA-256 tamper-proof certificate issuance with public verification at `/verify-certificate/[id]`.
- **Decoupled AI Academic Copilot**: Retrieval-Augmented Generation (RAG) assistant running on Google Gemini and FastAPI microservice.
- **Seven-Tier Role-Based Access Control (RBAC)**: Super Admin, Academic Admin, Security Admin, Content Manager, Mentor, Student, and Guest.

---

## 🛠️ Technology Stack

| Tier | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 16 (Turbopack) + React 19** | Server-Side Rendering (SSR) & React Server Components (RSC) |
| **Language & Typing** | **TypeScript 5.7+** | End-to-end type safety with zero runtime regression |
| **Styling & UI Primitives**| **Tailwind CSS + Radix UI Primitives** | Accessible, responsive, modern glassmorphic dark-mode UI |
| **Motion & Visuals** | **Framer Motion + GSAP + OGL** | Hardware-accelerated animations and WebGL backgrounds |
| **Database & ORM** | **PostgreSQL + Prisma ORM 6.3** | High-performance relational schema, pooling, and type-safe queries |
| **Authentication & Vault**| **HMAC-SHA256 Token Vault + Passkeys** | Tamper-proof session validation and role separation |
| **Media Pipeline** | **Cloudinary CDN** | Automated image optimization and cloud storage |
| **Transactional Email** | **Resend** | Outbound notifications and student onboarding alerts |

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Kunnalcodes/Edunexus.git
cd Edunexus
npm install
```

### 2. Environment Configuration
Copy the template and provide your database connection:
```bash
cp .env.example .env
```
Fill in your `DATABASE_URL` (e.g. from Neon, Supabase, or local PostgreSQL) and your `GEMINI_API_KEY`.

### 3. Synchronize Database & Seed
```bash
npx prisma db push
npm run prisma:seed
npx tsx prisma/seed-assessments.ts
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

---

## ☁️ Deploying to Render

This repository includes a pre-configured **`render.yaml`** blueprint for 1-click deployment on [Render](https://render.com):

1. Fork or push this repository to your GitHub account (`Kunnalcodes/Edunexus`).
2. Log into **[Render Dashboard](https://dashboard.render.com/)**.
3. Click **New +** ➔ **Blueprint**.
4. Connect this repository (`Edunexus`).
5. Render will automatically parse `render.yaml` and prompt you for environment variables:
   * `DATABASE_URL`: Your hosted PostgreSQL connection string (e.g. Neon, Supabase, or Render PostgreSQL).
   * `GEMINI_API_KEY`: Google AI Studio API key.
   * `CLOUDINARY_*`: Cloudinary cloud name and credentials.
   * `RESEND_API_KEY`: Resend email API key.
6. Click **Apply** ➔ Render will automatically run the build and publish the live web service!

---

## 🔑 Evaluation Credentials & Portal Access

For evaluators and academic viva review:

| Portal | Route | Secret Key | Passkey / Password |
| :--- | :--- | :--- | :--- |
| **Central Admin Console** | `/admin` | `NEXUS-ADMIN-8080` | `EduNexus@Admin2026` |
| **Security & Compliance** | `/admin` | `NEXUS-SEC-ADMIN-789` | `EduNexus@Sec789` |
| **Faculty & Mentor Portal**| `/mentor` | `NEXUS-MENTOR-78987` | `EduNexus@Mentor525` |
| **Student Learner Portal** | `/student` | — | Self-register at `/register` |

---

## 🧪 Testing & Verification

Run the comprehensive unit test suite:
```bash
npm test
```

Run full system architecture verification:
```bash
npx tsx scripts/verify-full-system-sanity.ts
```

---

## 📄 License
This project is licensed under the MIT License for educational, academic, and evaluation purposes.
