import React, { useState, useEffect } from "react";

const currencyOptions = [
  { code: "USD", name: "Dólar estadounidense" },
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Yen japonés" },
  { code: "GBP", name: "Libra esterlina" },
  { code: "AUD", name: "Dólar australiano" },
  { code: "CAD", name: "Dólar canadiense" },
  { code: "CHF", name: "Franco suizo" },
  { code: "CNY", name: "Yuan chino" },
  { code: "INR", name: "Rupia india" },
  { code: "RON", name: "Leu rumano" },
];

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
    <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Conversor de Divisas</h2>

      <div className="flex flex-col gap-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.code})
            </option>
          ))}
        </select>

        {convertedAmount && (
          <p className="text-lg font-semibold">
            {amount} {fromCurrency} equivale a{" "}
            <span className="text-blue-500">{convertedAmount} {toCurrency}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;