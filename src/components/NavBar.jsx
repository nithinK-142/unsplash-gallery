import React from 'react'

const NavBar = ({ children }) => {
  return (
    <div className="bg-[#5F746F] py-10 flex items-center">
      <div className="w-full max-w-md mx-auto">
        <a href="https://unsplashgalleryapp.netlify.app/">
          <h1 className='mb-5 text-2xl font-bold text-center text-white'>Unsplash Gallery</h1>
        </a>
        { children }
      </div>
    </div>
  );
}

export default NavBar