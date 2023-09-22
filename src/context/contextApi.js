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
    const { contents } = await fetchDataFromAPI("search", query);
    setSearchResults(contents);
    setLoading(false);
  };

  const updateMobileMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const updateSelectCategories = (category) => {
    setSelectCategories(category);
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        updateSelectCategories,
        mobileMenu,
        updateMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
