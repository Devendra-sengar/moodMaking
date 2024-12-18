import React from "react";

const WeatherWidget = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-blue-600">🌦 Weather Update</h3>
      <p className="mt-2 text-gray-600">
        Current Temperature: <strong>28°C</strong>
      </p>
      <p className="mt-1 text-gray-600">Location: Indore, India</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        More Details
      </button>
    </div>
  );
};

export default WeatherWidget;
