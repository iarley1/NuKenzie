import styled from "styled-components"

export const StyledTotalMoney = styled.div `
   .div-total-money {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-grey-2);
    border-radius: 4px;
    padding: 25px 20px;
    gap: 10px;
    max-width: 400px;
    margin-top: 20px;
   }

   .div-total-money div {
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   .div-total-money div > p {
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-primary);
   }

   .div-total-money div > h3 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-grey-4);
   }

   .div-total-money > span {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-5);
   }
`