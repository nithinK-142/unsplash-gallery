import { createContext, useState } from "react";
import Images from "./components/Images";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {
  const [searchText, setSearchText] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=puppy&client_id=${import.meta.env.VITE_ACCESS_KEY}`);

  const value = {
    response, 
    isLoading, 
    error, 
    fetchData,
    searchText, 
    setSearchText
  }
  return (
  <ImageContext.Provider value={value}>
    <NavBar>
      <Search/>
    </NavBar>
    <Images/>
  </ImageContext.Provider>
  );
}

export default App;

