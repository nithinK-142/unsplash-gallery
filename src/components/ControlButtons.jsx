import React from "react";

const ControlButtons = ({
  handleImageClick,
  switchScreenMode,
  openImageInNewTab,
  handlePreviousImage,
  handleNextImage,
  handleKeyPressed
}) => {
  return (
    <div>
        <button
          className="absolute text-lg text-white top-2 right-4"
          onClick={handleImageClick}
          onKeyDown={handleKeyPressed}
        >
          &#10005;
        </button>
        <button
          className="absolute ml-px text-lg text-white top-2 right-12"
          onClick={switchScreenMode}
          onKeyDown={handleKeyPressed}
        >
          &#x26F6;
        </button>
        <button
          className="absolute text-lg text-white top-2 right-20"
          onClick={openImageInNewTab}
        >
          {/* &#x1F855; arrow */}
          &#x25F3;
        </button>
      <button
        className="absolute text-5xl text-white left-4 top-1/2"
        onClick={handlePreviousImage}
      >
        {/* &#10094; */}
        &#10096;
      </button>
      <button
        className="absolute text-5xl text-white right-4 top-1/2"
        onClick={handleNextImage}
      >
        {/* &#10095; */}
        &#10097;
      </button>
    </div>
  );
};

export default ControlButtons;
