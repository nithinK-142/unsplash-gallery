import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

const Image = ({ data }) => {

  const [modalStatus, setModalStatus] = useState(false);
  const handleImageClick = () => {
    modalStatus ? setModalStatus(false) : setModalStatus(true);
  };

  useEffect(() => {
    document.body.style.overflow = modalStatus ? 'hidden' : 'unset';
    document.body.style.paddingRight = modalStatus ? '10px' : '0px';
  }, [modalStatus]);
  

  return (
    <>
      <div>
        <img
          className="h-72 w-full object-cover rounded-lg shadow-md cursor-pointer"
          src={data.urls.small}
          alt={data.alt_description}
          onClick={handleImageClick}
        />
      </div>
      {modalStatus && <ImageSlider currentId={data.id} handleImageClick={handleImageClick} />}
    </>
  );
};

export default Image;