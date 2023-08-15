import React from 'react'

const NavBar = ({ children }) => {
  return (
    <div className="bg-[#5F746F] py-10 flex items-center">
      <div className="max-w-md mx-auto w-full">
        <h1 className='text-white text-center text-2xl font-bold mb-5'>Unsplash Gallery</h1>
        { children }
      </div>
    </div>
  );
}

export default NavBar