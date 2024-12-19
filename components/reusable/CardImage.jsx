import React from "react";

function CardImage({ imageUrl }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <div className="relative pb-[56.25%]">
        {" "}
        {/* This creates a 16:9 aspect ratio container */}
        <img
          src={imageUrl}
          alt="Activity Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CardImage;
