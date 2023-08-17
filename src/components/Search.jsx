import { useContext, useState } from "react"
import { ImageContext } from "../App";

const Search = () => {

  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchText } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  } 

  const searchFunction = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_ACCESS_KEY}`);
    setSearchValue("");
    setSearchText(searchValue);
  }
  const handleButtonSearch = () => {
    searchFunction();
  } 

  const handleEnterSearch = (e) => {
    e.key === 'Enter' ? searchFunction() : undefined;
  }
  return (
    <div className="mt-5 flex font-normal mx-5">
        <input 
        className="bg-gray-50 border outline-none border-grey-300 text-black text-sm w-full indent-2 p-2.5 outline:none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl" 
        type="search" 
        placeholder="Seach Here..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <button
        disabled={!searchValue}
        onClick={handleButtonSearch}
        className="bg-blue-600 px-6 py-2.5 text-lg text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        >Search</button>

    </div>  
  )
}

export default Search