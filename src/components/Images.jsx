import React, { useContext } from 'react';
import { ImageContext } from '../App';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
  const { response, isLoading, searchText } = useContext(ImageContext);

  return (
    <div>
      {response.length === 0 ? (
        <h2 className='text-center mt-6 underline text-red-600 text-2xl'>
          No results for {searchText}
        </h2>
      ) : (
        <div>
          <h2 className='text-center mt-6 underline text-2xl'>
            Results for {searchText || 'puppy'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
            {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
          </div>
        </div>
      )}
    </div>
);

};

export default Images;


