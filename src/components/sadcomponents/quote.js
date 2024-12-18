import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = () => {
    const quotes = [
      "Happiness is not by chance, but by choice.",
      "Keep smiling, because life is a beautiful thing.",
      "Even the darkest night will end and the sun will rise.",
      "Every moment is a fresh beginning.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <p className="text-xl italic text-gray-700">"{quote}"</p>
    </div>
  );
};

export default Quote;
