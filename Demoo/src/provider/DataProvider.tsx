import { createContext, useContext, useState } from "react";
type myData = {
  phones: string[];
};
const DataContext = createContext<myData>({ phones: [] });
const phoneList = ["Samsung J2 pro", "Realme 6i", "IPhone SE 2020"];

export const DataProvider = ({ children }: { children: any }) => {
  const [phones, setPhones] = useState(phoneList);

  return (
    <DataContext.Provider value={{ phones }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const myContext = useContext(DataContext);
  if (!myContext) {
    console.log("context not available");
  }
  return myContext;
};
