import * as yup from "yup"

export const formTransactionSchema = yup.object().shape({
    description: yup.string().required("Preencha este campo"),
    value: yup.number().typeError("Por favor, digite um número").positive("Apenas numeros positivos").required("Preencha este campo"),
    type: yup.string().required("Escolha um opção")
})