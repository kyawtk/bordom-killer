import { createContext, useEffect, useState } from "react";

const TYPES = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]




export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({});

useEffect(()=>{
  fetchData()
},[])

  async function fetchData() {
    try {
      const response = await fetch("https://www.boredapi.com/api/activity/");
      if (!response.ok) {
        throw new Error(response.status);
      }
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <AppContext.Provider value={{ data, fetchData }}>
      {children}
    </AppContext.Provider>
  );
};
