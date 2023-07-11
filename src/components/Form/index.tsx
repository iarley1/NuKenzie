import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { formTransactionSchema } from "./formTransactionSchema";
import { StyledForm } from "./style";

export interface iDataTransaction {
  description: string;
  value: number;
  type: string;
}

export interface iDataTransactionReturn extends iDataTransaction {
  id: number
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iDataTransaction>({
    mode: "onTouched",
    resolver: yupResolver(formTransactionSchema),
  });

  const { listTransactions, setListTransactions } = useContext(DataContext);


  const submit = (data: iDataTransaction) => {
    const newData = {
      id: listTransactions.length > 0 ? listTransactions[listTransactions.length - 1].id + 1 : 1,
      ...data
    }
    setListTransactions([...listTransactions, newData]);
    reset()
  };

  return (
    <StyledForm
      errosDescription={errors.description}
      errosValue={errors.value}
      noValidate
      onSubmit={handleSubmit(submit)}
    >
      <div className="div-description">
        <Input
          className="input-description"
          type="text"
          label="Descrição"
          placeholder="Digite aqui sua descrição"
          register={register("description")}
        />
        <span>Ex: Compra de roupas</span>
        {errors.description && (
          <p className="erro-input">{errors.description.message}</p>
        )}
      </div>
      <div className="div-value-type">
        <div>
          <Input
            className="input-value"
            type="number"
            label="Valor"
            placeholder="1"
            register={register("value")}
          />
          {errors.value && <p className="erro-input">{errors.value.message}</p>}
        </div>
        <div className="div-type">
          <label>Tipo de valor</label>
          <select {...register("type")}>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saída</option>
          </select>
          {errors.type && <p className="erro-input">{errors.type.message}</p>}
        </div>
      </div>
      <Button type="submit">Inserir valor</Button>
    </StyledForm>
  );
};
