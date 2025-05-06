import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import UnitConverter from "./components/UnitConverter";

const App = () => {
  return (
    <div className="min-h-screen grid place-items-center p-6 bg-white text-black">
      
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
        ValuMate 💰⚖️
      </h1>

      {/* Contenedor de los conversores en una tarjeta estilizada */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl text-center">
        <CurrencyConverter />
        <UnitConverter />
      </div>

      {/* Botón de reinicio */}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition transform hover:scale-105"
      >
        Reiniciar Aplicación 🔄
      </button>
    </div>
  );
};

export default App;