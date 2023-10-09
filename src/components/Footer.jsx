import React, { useContext, useState, useEffect } from 'react';
import { ImageContext } from '../App';

const Footer = () => {
  const { resultStatus } = useContext(ImageContext);
  const [noResultsCSS, setNoResultsCSS] = useState('');

  useEffect(() => {
    setNoResultsCSS(resultStatus ? 'absolute left-0 bottom-0 right-0' : '');
  }, [resultStatus]);  
  
  return (
    <div
      className={`w-full bg-[#3d4d49] py-4 flex items-center justify-center ${noResultsCSS}`}
    >
        <p
          className='text-base font-semibold text-white'
        >Copyright &copy; 2023 Unsplash Gallery</p>
    </div>
  )
}

export default Footer