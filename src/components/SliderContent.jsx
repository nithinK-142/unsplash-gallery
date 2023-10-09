import React from "react";

const SliderContent = ({ currentImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${currentImage})` }}
      className="w-full h-full bg-center bg-no-repeat bg-contain rounded-2xl"
    ></div>
  );
};

export default SliderContent;
