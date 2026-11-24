# 🎓 EDUNEXUS — Next-Generation Smart LMS & Global Multi-Tenant Learning Platform
### Complete Academic Minor Project Setup, System Architecture & Viva Presentation Guide

---

## 📌 Project Overview

**Project Title:** EDUNEXUS — Modern Full-Stack Smart LMS & AI Copilot Learning Platform  
**Target:** Academic Minor Project / Capstone Evaluation / Production-Ready Distributed Web System  
**Core Architecture:** Next.js 16 (App Router) + React 19 + TypeScript + Prisma ORM + PostgreSQL + Decoupled FastAPI RAG AI Chatbot  

**EDUNEXUS** is an enterprise-grade, multi-tenant Smart Learning Management System (LMS) engineered for higher education institutions, polytechnic universities, and global technical academies. Unlike conventional single-organization portals or outdated monolithic LMS frameworks, EDUNEXUS provides an organization-agnostic, globally scalable learning infrastructure featuring:
- **Multi-Tenant Academic Delivery:** Configurable for universities, enterprise academies, or vocational schools without code divergence.
- **Hands-On Virtual Labs:** Interactive execution sandboxes with automated flag-based verification (`NEXUS{...}`).
- **Continuous Real-Time Telemetry & Timed Assessments:** Real-time question progression, anti-cheat detection, and instant scoring.
- **Cryptographic Certificate Issuance:** Verifiable credential generator with SHA-256 cryptographic hashes publicly verifiable at `/verify-certificate/[id]`.
- **Fine-Grained Role-Based Access Control (RBAC):** Seven distinct administrative and academic tiers (Super Admin, Academic Admin, Security Admin, Content Manager, Mentor, Student, Guest).
- **Decoupled AI Mentor Copilot:** Retrieval-Augmented Generation (RAG) assistant running on FastAPI, vector databases, and Redis caching.

---

## 🛠️ Complete Technology Stack

| Tier | Technology | Technical Purpose & Value |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 16 + React 19** | Server-Side Rendering (SSR), React Server Components (RSC), and edge routing |
| **Programming Language** | **TypeScript 5.7+** | End-to-end type safety, compile-time contract enforcement, zero runtime typing regressions |
| **Styling & UI Tokens** | **Tailwind CSS + Radix UI** | Modern glassmorphic dark-mode interface, WCAG-compliant primitives, responsive flexbox/grid |
| **Visuals & Motion** | **Framer Motion + GSAP + OGL** | High-performance interactive animations and hardware-accelerated WebGL visuals |
| **Rich Content Studio** | **TipTap (ProseMirror)** | Modular block-based WYSIWYG editor for interactive lectures and technical articles |
| **Database & ORM** | **PostgreSQL + Prisma ORM 6.3** | Relational data persistence with strict schemas, migrations, connection pooling, and seeding |
| **Authentication & RBAC**| **NextAuth.js / Custom Auth** | Multi-role session management, cryptographic passkeys, and route-level middleware protection |
| **AI Copilot Service** | **FastAPI + Qdrant + LLMs** | Vector-search powered AI academic mentor with streaming token outputs |
| **Media & Assets** | **Cloudinary CDN** | Cloud-native asset optimization, streaming media delivery, and secure storage |

---

## 🚀 Quick Start Guide (Run in 3 Steps)

### Step 1: Install Dependencies
Open your PowerShell / Terminal in the project root folder:
```bash
npm install
```

### Step 2: Initialize Database Client
Generate the Prisma ORM client:
```bash
npx prisma generate
```
*(Optional: To synchronize database tables or seed default courses, run `npx prisma db push` or `npx prisma db seed`)*

### Step 3: Launch Local Development Server
Run the Next.js Turbo development server:
```bash
npm run dev
```
Open your browser at: **[http://localhost:8080](http://localhost:8080)**

---

## 🔑 Portals, Roles & Pre-Configured Evaluation Credentials

EDUNEXUS includes built-in administrative passkey authentication for demonstration and viva evaluations:

### 1. Central Admin Portal
- **URL:** `http://localhost:8080/admin`
- **Admin Secret Key:** `NEXUS-ADMIN-8080`
- **Admin Passkey:** `EduNexus@Admin2026`
- **Capabilities:** Multi-course management, batch scheduling, student provisioning, mentor assignment, timetable builder, and system audit logs.

### 2. Security & Compliance Portal
- **URL:** `http://localhost:8080/admin`
- **Security Secret Key:** `NEXUS-SEC-ADMIN-789`
- **Security Passkey:** `EduNexus@Sec789`
- **Capabilities:** System hardening metrics, session inspection, access revocation, CSRF token oversight, and cryptographic credential vaults.

### 3. Faculty & Mentor Portal
- **URL:** `http://localhost:8080/mentor`
- **Mentor Secret Key:** `NEXUS-MENTOR-78987`
- **Mentor Passkey:** `EduNexus@Mentor525`
- **Capabilities:** Student batch tracking, attendance logging, virtual lab submission review, and doubt resolution.

### 4. Student & Learner Portal
- **URL:** `http://localhost:8080/student`
- **Access:** Direct self-registration at `/register` or sign in via `/login`.
- **Capabilities:** Dynamic course curriculum player, interactive lab sandboxes, timed assessments, performance analytics, and verifiable certificate downloads.

---

## 🤖 Running the AI Academic Copilot (Optional Microservice)

Located in `ts.inchatbot-main/`, this independent Python FastAPI microservice provides domain-specific RAG-based course assistance.

### Option A: Via Docker Compose
```bash
cd ts.inchatbot-main
docker-compose up -d
```
Starts FastAPI (port 8000), Qdrant Vector DB (port 6333), and Redis (port 6379).

### Option B: Local Python Environment
```bash
cd ts.inchatbot-main
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 📂 Modular Project Architecture

```
edunexus/
├── app/                               # Next.js 16 App Router (Pages, Layouts & Route Handlers)
│   ├── (admin)/admin/                 # Administrative management console
│   ├── (auth)/login/ & register/      # Authentication flows & session handlers
│   ├── (mentor)/mentor/               # Faculty dashboard, attendance & grading portal
│   ├── (public)/                      # Landing page, course catalog, blogs, certificate verification
│   ├── (student)/student/             # Student learning interface & lab terminal
│   └── api/                           # REST APIs (Auth, Courses, Blogs, Labs, Admin, Telemetry)
├── src/                               # Shared Enterprise Application Core
│   ├── components/                    # Reusable UI component library (Radix primitives, Modals, Navbar)
│   ├── lib/                           # Database client, auth guards, crypto vaults & CDN integrations
│   ├── types/                         # TypeScript domain contracts & database interfaces
│   └── hooks/                         # Custom React UI & telemetry state hooks
├── prisma/                            # Database schema & migrations
│   ├── schema.prisma                  # Comprehensive relational database schema (20+ models)
│   └── seed.ts                        # Seed data for curriculum, mentors, and assessments
├── docs/                              # Project guides & academic documentation
├── ts.inchatbot-main/                 # Python FastAPI + Qdrant RAG AI microservice
├── public/                            # Static assets, branding, and media
├── .env                               # Active environment configuration (pre-configured)
├── .env.example                       # Environment template for custom deployments
├── EDUNEXUS_MINOR_PROJECT_REPORT.md   # Complete 11-Chapter Academic Project Report
└── package.json                       # Scripts and project dependencies
```

---

## 🎯 Key Project Highlights for Academic Evaluation & Viva

1. **Multi-Tenant Global Architecture:** System models and routing support multi-institution deployments without hardcoded enterprise silos.
2. **Interactive Hands-On Lab Engine:** Real-time flag validation with cryptographic score assignment (`NEXUS{flag}`).
3. **Automated Assessment & Examination Engine:** Timed assessments with multiple-choice, code snippet evaluation, and instant grading.
4. **Tamper-Proof SHA-256 Verifiable Credentials:** Cryptographically verifiable certificates with public verification URL at `/verify-certificate/[id]`.
5. **Decoupled AI Mentor Copilot:** Hybrid search (BM25 + Qdrant embeddings) with Redis caching for ultra-low latency inference.
