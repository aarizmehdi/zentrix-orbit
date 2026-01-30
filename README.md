# 🪐 Zentrix Orbit

**The Premium UI Foundation for Modern React Applications.**

![Zentrix Orbit](https://zentrix-orbit.vercel.app/brand/logo/logo.png)

> **Live Demo:** [https://zentrix-orbit.vercel.app/](https://zentrix-orbit.vercel.app/)

## 📖 Overview

Zentrix Orbit is not just a component library—it's a massive, copy-pasteable UI foundation designed for developers who want **premium aesthetics** without the bloat. Built with **Radix UI** primitives for accessibility and **Tailwind CSS** for styling, it offers a "Headless" approach that gives you complete control.

**Built with ❤️ by Aariz Mehdi.**

---

## ✨ Key Features

-   **💎 Premium Aesthetics:** Glassmorphism, animated gradients, and subtle glow effects out of the box.
-   **🎨 Headless Architecture:** Powered by Radix UI for unstyled, accessible functionality.
-   **⚡ Zero Runtime Styles:** Uses Tailwind CSS for high-performance styling.
-   **🔧 Copy-Paste Ready:** Designed to be dropped directly into your project.
-   **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop.
-   **� Dark Mode Native:** Designed with a dark-first aesthetic (zinc-950).

---

## 🛠️ Tech Stack

This project is built using the industry's most robust modern technologies:

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core UI library for component-based architecture. |
| **TypeScript** | Static type checking for robust, error-free code. |
| **Vite** | Next-generation frontend tooling for instant dev server start. |
| **Tailwind CSS** | Utility-first CSS framework for rapid UI development. |
| **Radix UI** | Unstyled, accessible UI primitives (Dialogs, Toggles, etc.). |
| **Lucide React** | Beautiful, consistent icon set. |
| **Clsx / Tailwind-Merge** | Utilities for dynamic class name merging (`cn()` helper). |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aarizmehdi/zentrix-orbit.git
    cd zentrix-orbit
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## � Project Structure

```bash
zentrix-orbit/
├── public/              # Static assets (Favicons, Robots.txt, Sitemap)
│   └── brand/           # Logo and branding assets
├── src/                 # (Root source - flat structure in this repo)
├── components/          # Re-usable UI components (zentrix-ui.tsx)
├── App.tsx              # Main application logic & routing
├── global.css           # Global styles, animations, and Tailwind directives
├── index.html           # HTML entry point with SEO meta tags
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

---

## � How It Works (For Developers)

Zentrix Orbit uses a **"Utility Class" pattern**. Instead of writing separate `.css` files for every component, we use Tailwind utility classes directly in the JSX.

### The `cn()` Utility
You will see this helper function everywhere. It allows us to merge default styles with custom ones safely:
```tsx
// Merges 'bg-blue-500' with any extra props passed in
<div className={cn("bg-blue-500 p-4", className)}>...</div>
```

---

## 🤝 Contributing

Contributions are welcome! If you have an idea for a new component or improvement:

1.  Fork the repo.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

---

## ⚖️ License & Usage

**Copyright © 2026 Aariz Mehdi. All Rights Reserved.**

This repository is public for educational and portfolio purposes, and to allow community contributions to individual UI components.

**What you CAN do:**
-   ✅ View the code for educational purposes.
-   ✅ Copy specific UI components (buttons, cards, inputs) for use in your own projects.
-   ✅ Contribute new components or fixes via Pull Requests.

**What you CANNOT do:**
-   ❌ Clone, copy, or deploy the entire website/documentation platform.
-   ❌ Use the "Zentrix Orbit" branding or logo in your own projects.
-   ❌ Sell or redistribute this library as a competing product.

For strict commercial usage inquiries, please contact the author.

---

<div align="center">
  <p>Built with ❤️ by <b>Aariz Mehdi</b></p>
  <p>
    <a href="https://github.com/aarizmehdi">GitHub</a> •
    <a href="https://zentrix-orbit.vercel.app/">Website</a>
  </p>
</div>
