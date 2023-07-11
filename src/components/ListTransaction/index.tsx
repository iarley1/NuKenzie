import { CardTransaction } from "../CardTransaction";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { StyledListTransaction } from "./style";

export const ListTrasaction = () => {
  const { listTransactionsFitered, filter, handleClickAll, handleClickEntry, handleClickExit } = useContext(DataContext);

  return (
    <StyledListTransaction>
      <div className="div-filter">
        <h3>Resumo financeiro</h3>
        <section>
          <button
            className={filter === "todos" ? "todos" : ""}
            onClick={handleClickAll}
          >
            Todos
          </button>
          <button
            className={filter === "Entrada" ? "entrada" : ""}
            onClick={handleClickEntry}
          >
            Entrada
          </button>
          <button
            className={filter === "Saida" ? "saida" : ""}
            onClick={handleClickExit}
          >
            Despesa
          </button>
        </section>
      </div>
      {listTransactionsFitered.length !== 0 ? (
        <ul>
          {listTransactionsFitered.map((transaction, index) => {
            return <CardTransaction transaction={transaction} key={index} />;
          })}
        </ul>
      ) : (
        <ul>
          <div className="div-card-default">
            <h4>Você ainda não possui nenhum lançamento</h4>
            <li className="li-default">
              <span className="color-card-default"></span>
              <div></div>
              <div></div>
            </li>
            <li className="li-default">
              <span className="color-card-default"></span>
              <div></div>
              <div></div>
            </li>
            <li className="li-default">
              <span className="color-card-default"></span>
              <div></div>
              <div></div>
            </li>
          </div>
        </ul>
      )}
    </StyledListTransaction>
  );
};
