import React, { useState } from "react";

const units = {
  longitud: {
    metro: 1,
    kilómetro: 0.001,
    centímetro: 100,
    milímetro: 1000,
    milla: 0.000621371,
    yarda: 1.09361,
    pie: 3.28084,
    pulgada: 39.3701,
  },
  peso: {
    gramo: 1,
    kilogramo: 0.001,
    libra: 0.00220462,
    onza: 0.035274,
    tonelada: 0.000001,
  },
  temperatura: {
    celsius: (val) => val,
    fahrenheit: (val) => (val * 9) / 5 + 32,
    kelvin: (val) => val + 273.15,
  },
};

const UnitConverter = () => {
  const [amount, setAmount] = useState(1);
  const [unitType, setUnitType] = useState("longitud");
  const [fromUnit, setFromUnit] = useState("metro");
  const [toUnit, setToUnit] = useState("kilómetro");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConversion = () => {
    if (unitType === "temperatura") {
      setConvertedAmount(units.temperatura[toUnit](parseFloat(amount)).toFixed(2));
    } else {
      const factor = units[unitType][toUnit] / units[unitType][fromUnit];
      setConvertedAmount((amount * factor).toFixed(4));
    }
  };

  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Conversor de Unidades</h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select value={unitType} onChange={(e) => setUnitType(e.target.value)} className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="longitud">Longitud</option>
          <option value="peso">Peso</option>
          <option value="temperatura">Temperatura</option>
        </select>

        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          {Object.keys(units[unitType]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          {Object.keys(units[unitType]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <button
          onClick={handleConversion}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition"
        >
          Convertir
        </button>

        {convertedAmount && (
          <p className="text-lg font-semibold">
            {amount} {fromUnit} equivale a{" "}
            <span className="text-blue-500">{convertedAmount} {toUnit}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;