import React, { useState, useContext, useEffect } from "react";
import { ImageContext } from "../App";
import next from "../assets/arrow-right.svg";
import previous from "../assets/arrow-left.svg";

const ImageSlider = ({ currentId, handleImageClick }) => {
  const { response } = useContext(ImageContext);
  const [jsonData, setJsonData] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("w-3/4 h-3/4");

  useEffect(() => {
    const formattedData = response.map((data) => ({
      id: data.id,
      regularUrl: data.urls.regular,
    }));
    setJsonData(formattedData);

    const imageObject = formattedData.find((item) => item.id === currentId);
    if (imageObject) {
      setCurrentImage(imageObject.regularUrl);
      setCurrentIndex(formattedData.findIndex((item) => item.id === currentId));
    }
  }, [response, currentId]);

  const updateImageAndIndex = (index) => {
    const newIndex = (index + jsonData.length) % jsonData.length;
    setCurrentImage(jsonData[newIndex].regularUrl);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    updateImageAndIndex(currentIndex + 1);
  };

  const handlePreviousImage = () => {
    updateImageAndIndex(currentIndex - 1);
  };

  const preloadImage = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  };

  useEffect(() => {
    if (jsonData.length > 0) {
      preloadImage(jsonData[(currentIndex + 1) % jsonData.length].regularUrl);
      preloadImage(
        jsonData[(currentIndex - 1 + jsonData.length) % jsonData.length]
          .regularUrl
      );
    }
  }, [jsonData, currentIndex]);

  const switchScreenMode = () => {
    setScreenSize(
      screenSize === "w-3/4 h-3/4" ? "w-full h-full" : "w-3/4 h-3/4"
    );
  };

  const openImageInNewTab = () => {
    window.open(currentImage, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div
        className={`${screenSize} m-auto relative group bg-slate-500 rounded-lg`}
      >
        <button
          className="absolute top-2 right-4 text-white text-lg"
          onClick={handleImageClick}
        >
          &#10005;
        </button>
        <button
          className="absolute top-2 right-12 text-white text-lg ml-px"
          onClick={switchScreenMode}
        >
          &#x26F6;
        </button>
        <button
          className="absolute top-2 right-20 text-white text-lg"
          onClick={openImageInNewTab}
        >
          {/* &#x1F855; arrow */}
          &#x25F3;
        </button>
        <button
          className="absolute left-2 top-1/2"
          onClick={handlePreviousImage}
        >
          <img className="h-8" src={previous} alt="previous" />
        </button>
        <button
          className="absolute right-2 top-1/2"
          onClick={handleNextImage}
        >
          <img className="h-8" src={next} alt="next" />
        </button>
        <div
          style={{ backgroundImage: `url(${currentImage})` }}
          className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat"
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
