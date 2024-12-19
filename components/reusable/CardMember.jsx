import React from "react";

function CardMember({ imageUrl, name, title }) {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src={imageUrl}
        alt="Member"
        className="w-full h-96 object-cover object-top mx-auto"
      />
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-center h-20 text-md text-gray-800">{name}</p>
      </div>
    </div>
  );
}

export default CardMember;
