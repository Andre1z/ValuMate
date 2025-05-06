import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";
import UnitConverter from "./components/UnitConverter";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-600 p-4">
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
        ValuMate 💰⚖️
      </h1>
      
      <div className="max-w-lg w-full space-y-6 bg-white p-6 rounded-lg shadow-lg">
        <CurrencyConverter />
        <UnitConverter />
      </div>
    </div>
  );
};

export default App;