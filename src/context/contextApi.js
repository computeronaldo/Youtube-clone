import { createContext, useState, useEffect } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategories(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategories = async (query) => {
    setLoading(true);
    try {
      const { contents } = await fetchDataFromAPI("search", { q: query });
      if (contents === undefined) {
        throw new Error("Couldn't fetch data.");
      }
      setSearchResults(contents);
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  };

  const updateMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const updateSelectCategories = (category) => {
    setSelectCategories(category);
  };

  const updateLoading = (state) => {
    setLoading(state);
  };

  const reFetchData = () => {
    fetchSelectedCategories(selectCategories);
  };

  return (
    <Context.Provider
      value={{
        loading,
        updateLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        updateSelectCategories,
        mobileMenu,
        updateMobileMenu,
        reFetchData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
