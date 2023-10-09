import React, { useState, useContext, useEffect } from "react";
import { ImageContext } from "../App";
import SliderContent from "./SliderContent";
import ControlButtons from "./ControlButtons";
import ImageIndicators from "./ImageIndicators";

const ImageSlider = ({ currentId, handleImageClick }) => {
  const { response } = useContext(ImageContext);
  const [jsonData, setJsonData] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("w-3/4 h-3/4");
  const [activeIndicator, setActiveIndicator] = useState(0);

  useEffect(() => {
    const formattedData = response.map(({ id, urls: { regular } }) => ({
      id,
      regularUrl: regular,
    }));
    setJsonData(formattedData);

    const imageObject = formattedData.find((item) => item.id === currentId);
    if (imageObject) {
      setCurrentImage(imageObject.regularUrl);
      const newIndex = formattedData.findIndex((item) => item.id === currentId);
      setCurrentIndex(newIndex);
      setActiveIndicator(newIndex);
    }
  }, [response, currentId]);

  const handleIndicatorClick = (index) => {
    updateImageAndIndex(index);
  };
  
  const updateImageAndIndex = (index) => {
    const newIndex = (index + jsonData.length) % jsonData.length;
    setCurrentImage(jsonData[newIndex].regularUrl);
    setCurrentIndex(newIndex);
    setActiveIndicator(newIndex);
  };

  const handleNextImage = () => updateImageAndIndex(currentIndex + 1);

  const handlePreviousImage = () => updateImageAndIndex(currentIndex - 1);

  const preloadImage = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  };

  useEffect(() => {
    if (jsonData.length > 0) {
      preloadImage(jsonData[(currentIndex + 1) % jsonData.length].regularUrl);
      preloadImage(jsonData[(currentIndex - 1 + jsonData.length) % jsonData.length].regularUrl);
    }
  }, [jsonData, currentIndex]);

  const switchScreenMode = () => {
    setScreenSize((screenSize) => (screenSize === "w-3/4 h-3/4" ? "w-full h-full" : "w-3/4 h-3/4"));
  };

  const openImageInNewTab = () => {
    window.open(currentImage, "_blank");
  };

  const handleKeyPressed = (e) => {
    if (e.keyCode === 37) handlePreviousImage();
    if (e.keyCode === 39) handleNextImage();
    if (e.keyCode === 27) handleImageClick();
    if (e.keyCode === 13) switchScreenMode();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressed);
    return () => {
      document.removeEventListener('keydown', handleKeyPressed);
    };
  }, [handleKeyPressed]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className={`${screenSize} m-auto relative group bg-slate-500 rounded-lg`}>
        <SliderContent currentImage={currentImage} />
        <ControlButtons
          handleImageClick={handleImageClick}
          switchScreenMode={switchScreenMode}
          openImageInNewTab={openImageInNewTab}
          handlePreviousImage={handlePreviousImage}
          handleNextImage={handleNextImage}
          handleKeyPressed={handleKeyPressed}
        />
        <ImageIndicators
          jsonData={jsonData}
          activeIndicator={activeIndicator}
          handleIndicatorClick={handleIndicatorClick}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
