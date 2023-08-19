import React from "react";

const SliderContent = ({ currentImage }) => {
  return (
    // <div className="h-full bg-contain">
      <div
        style={{ backgroundImage: `url(${currentImage})` }}
        className="h-full rounded-2xl bg-center bg-no-repeat bg-contain"
      ></div>
    // </div>
  );
};

export default SliderContent;
