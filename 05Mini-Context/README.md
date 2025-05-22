# ⚛️ Mini-Context – React Context API Project

**Mini-Context** is a minimal React project demonstrating the use of the **React Context API** for state management. This project replaces prop drilling with a global state mechanism to efficiently share data between components.

---

## 🚀 Features

- 🧠 Uses React's built-in **Context API**
- 🏗️ Global state management without external libraries (like Redux)
- 📡 Share data between deeply nested components
- 💡 Clean and simple architecture
- ⚡ Built with Vite for fast development


## 🛠️ Tech Stack

- **React.js**
- **React Context API**
- **Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS**


## 📁 Project Structure

```

05Mini-Context/
├── public/
├── src/
│   ├── components/
│   │   └── Login.jsx
│   │   └── Profile.jsx
│   ├── context/
│   │   └── UserContext.js
│   │   └── UserContextProvider.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md

```


## 🧩 How It Works

1. A global context is created using `createContext()`.
2. A Context Provider wraps the main App to supply shared data.
3. Any component can access or update the context using `useContext()`.



## 🧪 Code Snippets

### 🔧 Create Context

```jsx
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("John Doe");

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
```

### 📦 Use Context in Components

```jsx
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function ChildComponent() {
  const { user } = useContext(AppContext);
  return <p>Hello, {user}!</p>;
}
```



## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SutharHarsh/Chai-Aur-React.git
cd 05Mini-Context
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```


Built with ❤️ using React + Vite + Context API
