import React, { useContext,useEffect } from 'react';
import { ImageContext } from '../App';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
  const { response, isLoading, searchText, setResultStatus } = useContext(ImageContext);
  const checkResponse = response.length !== 0;

  useEffect(() => {
    setResultStatus(!checkResponse);
  }, [checkResponse]);

  return (
    <div>
      {checkResponse ? (
        <div>
          <h2 className='mt-6 text-2xl text-center underline'>
            Results for {searchText || 'puppy'}
          </h2>
          <div className="grid gap-4 px-4 mx-auto my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl">
            {!isLoading ? response.map((data, key) => <Image key={key} data={data} />) : <Skeleton item={10} />}
          </div>
        </div>
      ) : (
        <div>
          <h2 className='mt-6 text-2xl text-center text-red-600 underline'>
            No results for {searchText}
          </h2>
        </div>
      )}
    </div>
);

};

export default Images;


