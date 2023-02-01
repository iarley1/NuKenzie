import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Button } from "../Button";

export const CardTransaction = ({ transaction, index }: any) => {
  const { listTransactions, setListTransactions} = useContext(DataContext)

  const indexObj = index

  const deleteTransaction = () => {
    const newListTransactions = listTransactions.filter((transaction, index) => {
      return indexObj !== index
    })
    setListTransactions(newListTransactions)
  };

  return (
    <>
      <li>
        <h2>{transaction.description}</h2>
        <p>{transaction.value}</p>
        <p>{transaction.type}</p>
        <Button onClick={deleteTransaction} type="button">Excluir</Button>
      </li>
    </>
  );
};
