import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext";

export interface iDataTransaction {
  description: string;
  value: number;
  type: string;
}

export const Form = () => {
  const { register, handleSubmit } = useForm<iDataTransaction>();

  const { listTransactions, setListTransactions} = useContext(DataContext)

  const submit = (data: iDataTransaction) => {
    setListTransactions([...listTransactions, data])
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input type="text" label="Descrição" placeholder="Digite aqui sua descrição" register={register("description")}/>
        <span>Ex: Compra de roupas</span>
      </div>
      <div>
        <Input type="number" label="Valor" placeholder="1" register={register("value")}/>
        <div>
          <label>Tipo de valor</label>
          <select {...register("type")}>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
        </div>
      </div>
      <Button type="submit">Inserir Valor</Button>
    </form>
  );
};
