import React from "react";

const ActivityCard = ({ title, description, buttonText, link, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-indigo-700">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            {buttonText}
          </a>
        ) : (
          <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
