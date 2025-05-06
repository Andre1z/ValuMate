import React, { useState, useEffect } from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import UnitConverter from "./components/UnitConverter";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
      
      {/* Botón de cambio de modo oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
      >
        {darkMode ? "Modo Claro ☀️" : "Modo Oscuro 🌙"}
      </button>

      {/* Contenedor de los conversores */}
      <div className="max-w-lg w-full space-y-6 bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
        <CurrencyConverter />
        <UnitConverter />
      </div>
      
      {/* Botón de reinicio */}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        Reiniciar Aplicación 🔄
      </button>
    </div>
  );
};

export default App;