import React, { useState } from "react";

const units = {
  length: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
  },
  weight: {
    gram: 1,
    kilogram: 0.001,
    pound: 0.00220462,
    ounce: 0.035274,
  },
};

const UnitConverter = () => {
  const [amount, setAmount] = useState(1);
  const [unitType, setUnitType] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const handleConversion = () => {
    const factor = units[unitType][toUnit] / units[unitType][fromUnit];
    setConvertedAmount((amount * factor).toFixed(4));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Conversor de Unidades</h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />

        <select value={unitType} onChange={(e) => setUnitType(e.target.value)} className="p-2 border rounded">
          <option value="length">Longitud</option>
          <option value="weight">Peso</option>
        </select>

        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="p-2 border rounded">
          {Object.keys(units[unitType]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="p-2 border rounded">
          {Object.keys(units[unitType]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <button onClick={handleConversion} className="bg-blue-600 text-white py-2 rounded">
          Convertir
        </button>

        {convertedAmount && (
          <p className="text-lg font-semibold">
            {amount} {fromUnit} equivale a <span className="text-blue-500">{convertedAmount} {toUnit}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UnitConverter;