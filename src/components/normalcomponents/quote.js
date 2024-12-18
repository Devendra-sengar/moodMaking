import React, { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Happiness is not by chance, but by choice.",
      "Smile! It's contagious 😊.",
      "Each day is a new beginning 🌅.",
      "You are stronger than you think 💪.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="p-6 bg-pink-100 rounded-lg shadow-md animate-bounce">
      <p className="text-xl italic text-gray-800 text-center">"{quote}"</p>
    </div>
  );
};

export default Quote;
