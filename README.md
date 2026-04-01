# galik.biz – Portfolio Website (Frontend + Contact Form Backend)

This repository contains code for galik.biz – a personal portfolio website for a **Frontend Developer & DTP Freelancer**.
The project includes a modern responsive landing page, portfolio gallery, mobile navigation, interactive UI elements, and a working contact form connected to a PHP backend.

## 🔥 Features

### Frontend

- Responsive layout (mobile-first + desktop support)
- Semantic HTML5 structure
- Modular SCSS architecture (`@use`, variables, mixins)
- Mobile navigation with hamburger menu
- Animated skills carousel (speed changes on hover)
- Portfolio section with tab filtering (DTP / Web projects)
- Portfolio image zoom popup with external demo links
- Privacy policy modal popup
- Smooth section navigation
- Form validation with accessible feedback messages
- Anti-spam protection (honeypot fields + minimal submit time)

### Backend (PHP)

- Contact form endpoint with:
  - Honeypot spam protection
  - Minimum form fill time validation (anti-bot)
  - Rate limiting per IP (stored in `rate_limit.json`)
  - Saving messages to file (`messages.txt`)
  - Sending email to site owner
  - Sending confirmation email to user
- CORS support for frontend connection

## 🛠 Tech Stack

### Frontend

- **HTML5**
- **SCSS**
- **TypeScript**
- **Vite**
- Vanilla JavaScript logic (written in **TypeScript**)

### Backend

- **PHP**
- Native PHP `mail()` function

## 📂 Project Structure

Frontend code is modularized into reusable scripts:

- `main.ts` – DOM selection + event listeners
- `functions.ts` – UI logic (menu, validation, portfolio filtering, popups, carousel)
- `store.ts` – global state, config values, templates

SCSS is split into modules using `@use` (variables, mixins, layout, components).

## 🔐 Anti-Spam Protection

The contact form includes multiple anti-spam layers:

- **Honeypot inputs** (hidden fields bots may fill)
- **Minimum submit time** (must be at least 2 seconds)
- **Rate limiting** (one request per IP per 60 seconds)

## ♿ Accessibility

The project includes accessibility improvements:

- ARIA labels for navigation and menus
- Keyboard support (`Enter` to open portfolio popup, `Escape` to close modals)
- Validation messages announced via `aria-live="polite"`
- Buttons and links have correct `aria-expanded` behavior

## 📌 SEO / Metadata

The HTML includes:

- meta description
- canonical URL
- Open Graph tags
- JSON-LD structured data (`LocalBusiness`, `ProfessionalService`)
- favicon + webmanifest setup

## 🚀 Live Version

Website is deployed here:

👉 ([https://galik.biz](https://galik.biz))

## 📄 License

This project is private/personal portfolio code.
You may use parts of the code for learning purposes, but do not copy the full design/content for commercial use.
