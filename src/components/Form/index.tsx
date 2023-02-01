import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext";
import { yupResolver } from "@hookform/resolvers/yup"
import { formTransactionSchema } from "./formTransactionSchema";

export interface iDataTransaction {
  description: string;
  value: number;
  type: string;
}

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<iDataTransaction>({
    mode: "onTouched",
    resolver: yupResolver(formTransactionSchema)
  });

  const { listTransactions, setListTransactions} = useContext(DataContext)

  const submit = (data: iDataTransaction) => {
    setListTransactions([...listTransactions, data])
  };

  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <div>
        <Input type="text" label="Descrição" placeholder="Digite aqui sua descrição" register={register("description")}/>
        <span>Ex: Compra de roupas</span>
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <Input type="number" label="Valor" placeholder="1" register={register("value")}/>
        {errors.value && <p>{errors.value.message}</p>}
        <div>
          <label>Tipo de valor</label>
          <select {...register("type")}>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
      </div>
      <Button type="submit">Inserir Valor</Button>
    </form>
  );
};
