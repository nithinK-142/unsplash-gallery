import React from "react";

const SliderContent = ({ currentImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${currentImage})` }}
      className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat"
    ></div>
  );
};

export default SliderContent;
