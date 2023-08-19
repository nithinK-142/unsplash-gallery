import { createContext, useState } from "react";
import Images from "./components/Images";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import useAxios from "./hooks/useAxios";
import Footer from "./components/Footer";
import Orientation from "./components/Orientation";

export const ImageContext = createContext();

function App() {
  const [searchText, setSearchText] = useState('');
  const [resultStatus, setResultStatus] = useState('');
  const orientation = Orientation(); 

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=puppy&client_id=${import.meta.env.VITE_ACCESS_KEY}&orientation=${orientation}`);

  const value = {
    response, 
    isLoading, 
    error, 
    fetchData,
    searchText, 
    setSearchText,
    resultStatus,
    setResultStatus
  }
  return (
  <>
    <ImageContext.Provider value={value}>
      <NavBar>
        <Search/>
      </NavBar>
      <Images/>
      <Footer />
    </ImageContext.Provider>
  </>
  );
}

export default App;

