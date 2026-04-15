# 🚀 QueryMastery

> An interactive, in-browser Database Learning Platform built to master SQL and NoSQL through gamified challenges and a real-time WebAssembly execution engine.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## ✨ Features

- **🎮 Interactive Playground:** Execute real SQL queries directly in your browser. No backend server is required! Powered by a WebAssembly SQLite engine.
- **📈 Gamified Learning Path:** Progress from Beginner to Senior levels. Complete modules, achieve objectives, and earn points.
- **📖 Dynamic Cheat Sheet:** A fully searchable, interactive SQL command guide with usages, examples, and descriptions to help you when you get stuck.
- **💡 Hint System:** Use points to unlock clues and starter codes for complex challenges.
- **🌙 Premium UI/UX:** Fully responsive Dark/Light mode interface with smooth animations.

---

## 🛠️ Tech Stack & Packages

This project leverages modern web technologies for a seamless experience:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Database Engine:** [`sql.js`](https://sql.js.org/) (WebAssembly compilation of SQLite)

---

## 💻 Installation & Local Setup

Follow these steps to run QueryMastery on your local machine:

**1. Clone the repository:**
```bash
git clone [https://github.com/YOUR-USERNAME/QueryMastery.git](https://github.com/YOUR-USERNAME/QueryMastery.git)
```
```
cd QueryMastery
```

**2. Install dependencies:**
```bash
npm install
```

**3. Setup WebAssembly (Crucial Step):**
> Ensure the sql-wasm-browser.wasm file is present in your public directory so the browser engine can load it.
```bash
cp node_modules/sql.js/dist/sql-wasm.wasm public/sql-wasm-browser.wasm
```

**4. Start the development server:**
```bash
npm run dev
```
> Open `http://localhost:3000` with your browser to see the result.

## 🤝 How to Contribute (Fork & PR)
We welcome contributions! Whether it's adding a new SQL challenge, fixing a bug, or improving the UI, your help is appreciated. Here is how you can contribute:

Fork the Project: Click the "Fork" button at the top right of this repository to create a copy in your own GitHub account.

1. Clone your Fork: 
```bash
git clone https://github.com/YOUR-USERNAME/QueryMastery.git
```

2. Create a Feature Branch: 
```bash
git checkout -b feature/AmazingFeature
```

3. Commit your Changes: 
```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch:
```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request: 
Go to the original repository and click on "Compare & pull request". Provide a clear description of what you've changed.

## 📄 License
Distributed under the MIT License. See LICENSE for more information.

Built with ❤️ by [Atul Paul](https://atulpaul.vercel.app)
