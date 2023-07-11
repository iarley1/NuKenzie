import { createContext, useState, useEffect, SetStateAction } from "react";
import { iDataTransactionReturn } from "../components/Form";

interface iDAtaProviderProps {
  children: React.ReactNode;
}

interface iDataContext {
  listTransactions: iDataTransactionReturn[];
  setListTransactions: React.Dispatch<SetStateAction<iDataTransactionReturn[]>>;
  listTransactionsFitered: iDataTransactionReturn[];
  filter: string;
  handleClickEntry: () => void;
  handleClickExit: () => void;
  handleClickAll: () => void;
}

export const DataContext = createContext({} as iDataContext);

export const DataProvider = ({ children }: iDAtaProviderProps) => {
  const obj: iDataTransactionReturn[] = [];
  const [listTransactions, setListTransactions] = useState(obj);
  const [filter, setFilter] = useState("todos");

  const handleClickEntry = () => {
    setFilter("Entrada");
  };

  const handleClickExit = () => {
    setFilter("Saida");
  };

  const handleClickAll = () => {
    setFilter("todos")
  }

  let listTransactionsFitered = listTransactions.filter(
    (transaction) => transaction.type === filter
  );

  if (filter === "todos") {
    listTransactionsFitered = listTransactions;
  }

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
    <DataContext.Provider value={{ listTransactions, setListTransactions, listTransactionsFitered, filter, handleClickEntry, handleClickExit, handleClickAll }}>
      {children}
    </DataContext.Provider>
  );
};
