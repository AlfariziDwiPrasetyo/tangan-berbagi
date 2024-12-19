import React from "react";

function Card({ title, name, description }) {
  return (
    <div className="max-w-full rounded-lg shadow-lg bg-white overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default Card;
