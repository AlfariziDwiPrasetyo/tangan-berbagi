import React from "react";

function CardMember({ imageUrl, name }) {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
      <img
        src={imageUrl}
        alt="Member"
        className="w-full h-72 object-cover object-top mx-auto"
      />
      <div className="p-4">
        <h3 className="text-center text-lg font-semibold text-gray-800">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default CardMember;
