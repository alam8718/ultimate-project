import {useState, useContext, createContext, useEffect} from "react";

export const ContextApi = createContext();

export const AppContextProvider = ({children}) => {
  // const [loading, setLoading] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await import("@/context/data");
      setAllData(data.default);
    };

    fetchData();
  }, []);

  console.log(allData);
  return (
    <ContextApi.Provider
      value={{
        // loading,
        // setLoading,
        allData,
        mobileMenu,
        setMobileMenu,
      }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextApi);
};
