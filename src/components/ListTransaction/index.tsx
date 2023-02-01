import { CardTransaction } from "../CardTransaction"
import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext"

export const ListTrasaction = () => {
    const { listTransactions } = useContext(DataContext)

    return (
        <ul>
            {listTransactions.map((transaction, index) => {
                return (
                    <CardTransaction transaction={transaction} index={index} key={index}/>
                )
            })}
        </ul>
    )
}