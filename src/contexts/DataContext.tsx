import { createContext, useState, useEffect, SetStateAction } from "react";
import { iDataTransaction } from "../components/Form";

interface iDAtaProviderProps {
  children: React.ReactNode;
}

interface iDataContext {
  listTransactions: iDataTransaction[];
  setListTransactions: React.Dispatch<SetStateAction<iDataTransaction[]>>;
}

export const DataContext = createContext({} as iDataContext);

export const DataProvider = ({ children }: iDAtaProviderProps) => {
  const obj: iDataTransaction[] = [];
  const [listTransactions, setListTransactions] = useState(obj);

  useEffect(() => {
    if (localStorage.getItem("transactions") !== "[]") {
      setListTransactions(
        JSON.parse(localStorage.getItem("transactions") || "[]")
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(listTransactions));
  }, [listTransactions]);

  return (
    <DataContext.Provider value={{ listTransactions, setListTransactions }}>
      {children}
    </DataContext.Provider>
  );
};
