import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { StyledTotalMoney } from "./style";

export const TotalMoney = () => {
  const { listTransactionsFitered } = useContext(DataContext);

  const totalValue: number = listTransactionsFitered.reduce((acc, obj) => {
    if (obj.type === "Saida") {
      return acc + -obj.value;
    }
    return acc + obj.value;
  }, 0);

  return (
    <StyledTotalMoney>
      {listTransactionsFitered.length !== 0 && (
        <div className="div-total-money">
          <div>
            <h3>Valor total:</h3>
            <p>
              {totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <span>O valor se refere ao saldo</span>
        </div>
      )}
    </StyledTotalMoney>
  );
};
