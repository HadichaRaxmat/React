import React from 'react';
import About from './components/About.js';
import './index.css';

function App() {
  return (
    <>
      <About />
      <div className="min-h-screen bg-blue-800 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">Tailwind работает 🎉</h1>
      </div>
    </>
  );
}

export default App;
