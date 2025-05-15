# 🧭 React Router Project

A demo project built with **React Router** and **Vite** to showcase client-side routing in a modern application. This project demonstrates how to navigate between different pages without reloading the entire app.
<br>

## 🚀 Features

- 📄 Multiple pages using React Router
- 🔗 Declarative routing with `<Route>` and `<Link>`
- 🧭 Dynamic routing with URL parameters
- ⚠️ 404 Not Found page handling
- 🧼 Clean and responsive UI
- ⚡ Super fast build and dev environment (Vite)
<br>

## 🛠️ Tech Stack

- **React.js**
- **React Router DOM**
- **Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS**
<br>

## 📁 Project Structure

```

04React-Router/
├── public/
├── src/
│   ├── components/
│   │   ├── About/
│   │   |   ├── About.jsx
│   │   ├── Contact/
│   │   |   ├── Contact.jsx
│   │   ├── Footer/
│   │   |   ├── Footer.jsx
│   │   ├── Github/
│   │   |   ├── Github.jsx
│   │   ├── Header/
│   │   |   ├── Header.jsx
│   │   ├── Home/
│   │   |   ├── Home.jsx
│   │   ├── User/
│   │   |   ├── User.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md

```

## 🌐 Routing Example


```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

## 🧭 Navigation Example

```jsx
import { Link } from 'react-router-dom';

<nav>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SutharHarsh/Chai-Aur-React.git
cd 04React-Router
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

Made with 🧭 React Router & ⚡ Vite
