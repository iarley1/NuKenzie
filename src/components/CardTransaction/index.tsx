import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Button } from "../Button";
import { StyledLi } from "./style";
import trash from "../../asserts/img/trash.svg"
import { iDataTransactionReturn } from "../Form";

interface cardTrasactionProps {
  transaction: iDataTransactionReturn
}

export const CardTransaction = ({ transaction }: cardTrasactionProps) => {
  const { listTransactions, setListTransactions } = useContext(DataContext);

  const deleteTransaction = (id: number) => {
    const newListTransactions = listTransactions.filter(
      transaction => transaction.id !== id
    );
    setListTransactions(newListTransactions);
  };


  return (
    <StyledLi colorCard={transaction.type}>
      <span className="color-card"></span>
      <div className="description-type">
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </div>
      <div className="value-button">
        <p>
          {transaction.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button onClick={() => deleteTransaction(transaction.id)} type="button">
         <img src={trash} alt="" />
        </Button>
      </div>
    </StyledLi>
  );
};



