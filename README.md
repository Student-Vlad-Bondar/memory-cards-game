# 🎴 Memory Cards Game

**Memory Cards Game** is an interactive web application designed to train cognitive memory. This project was developed as part of the **"Component-Oriented Programming" (COP)** university course. It demonstrates modern UI development practices, robust state management, and strict adherence to privacy standards (GDPR).

---

## Author
* **Student:** Bondar Vladyslav
* **Group:** IPZ-23-5
* **University Year:** 2026

---

## 🛠 Tech Stack
* **Framework:** [React 19](https://react.dev/)
* **State Management:** [Zustand](https://docs.pmnd.rs/zustand/)
* **Routing:** [React Router v7](https://reactrouter.com/)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/) + Yup (validation)
* **Styling:** CSS Modules & Global CSS
* **Build Tool:** Vite

---

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
```bash
npm install
```

### Run in Development Mode
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## Project Requirements Checklist

This repository meets all the criteria for the COP course assessment (**24/24 points**):

### 1. License & Compliance
The project is officially distributed under the **MIT License**.
* **Audit:** A full dependency license audit was performed using `license-checker`.
* **Audit Report:** [`license-report.txt`](./license-report.txt)
* **License Text:** [`LICENSE`](./LICENSE)

### 2. Cookie Popup & GDPR
Implemented a custom **Cookie Consent Banner** to ensure transparency and user control.
* **Compliance:** Statistics and game results are recorded in `LocalStorage` **only** if the user provides explicit "Statistics" consent.
* **Storage:** Uses `js-cookie` for session management with `SameSite: Strict` security.

### 3. Privacy Policy & Manual
A comprehensive document outlining data handling, user rights under GDPR, and technical instructions.
* **Document:** [`PRIVACY_POLICY.md`](./PRIVACY_POLICY.md)
* **In-app Access:** Users can view the policy and reset their consent at the `/privacy` route.

### 4. Generated Documentation
Source code is documented using the **JSDoc** standard for all components and stores.
* **Local Access:** Open `docs/index.html` in any web browser to view the API reference.
* **Video Demonstration:** A screen recording (./lab1.mkv) is included.

### 5. Storybook
A dedicated environment for isolated component development and testing.
* **Base Component:** `Button` (featuring variations for sizes, states, and styles).
* **Complex Component:** `SettingsForm` / `GameBoard` (supporting dynamic property configuration).
* **Command:**
```bash
npm run storybook
```

---

## ⚖️ Legal & Liability
This software is provided "as is", without warranty of any kind. All data processing (authentication, settings, and scores) occurs strictly on the client-side within the user's browser (Local Storage & Cookies). No data is transmitted to external servers.

---

Created for educational purposes @ 2026