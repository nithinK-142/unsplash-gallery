import React from "react";

const ImageIndicators = ({ jsonData, activeIndicator, handleIndicatorClick }) => {
  return (
    <div className="flex justify-center mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
      {jsonData.map((_, index) => (
        <button
          key={index}
          onClick={() => handleIndicatorClick(index)}
          className={`w-2 h-2 mx-1 rounded-full outline-none ${
            index === activeIndicator ? "bg-white" : "bg-black"
          }`}
        ></button>
      ))}
    </div>
  );
};

export default ImageIndicators;
