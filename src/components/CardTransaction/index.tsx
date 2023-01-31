export const CardTransaction = ({ transaction }: any) => {

    return (
        <>
          <li>
            <h2>{transaction.description}</h2>
            <p>{transaction.value}</p>
            <p>{transaction.type}</p>
          </li>
        </>
    )
}