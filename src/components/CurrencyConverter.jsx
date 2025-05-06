import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    if (amount > 0) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          const rate = data.rates[toCurrency];
          setConvertedAmount((amount * rate).toFixed(2));
        })
        .catch((error) => console.error("Error fetching exchange rates:", error));
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Conversor de Divisas</h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded"
        />

        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="p-2 border rounded">
          <option value="USD">USD - Dólar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="JPY">JPY - Yen Japonés</option>
        </select>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="p-2 border rounded">
          <option value="USD">USD - Dólar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="JPY">JPY - Yen Japonés</option>
        </select>

        {convertedAmount && (
          <p className="text-lg font-semibold">
            {amount} {fromCurrency} equivale a <span className="text-blue-500">{convertedAmount} {toCurrency}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;