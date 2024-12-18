import React from "react";

const ActivityCard = ({ title, description, buttonText, link, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default ActivityCard;
