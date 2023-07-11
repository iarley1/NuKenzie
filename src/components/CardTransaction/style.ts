import styled from "styled-components";

interface iPropsStyled {
    colorCard: string
}


export const StyledLi = styled.li<iPropsStyled> `
   display: flex;
   justify-content: space-between;
   padding: 0 15px;
   width: 100%;
   height: 87px;
   position: relative;
   background-color: var(--color-grey-1);
   border-radius: 4px;
   align-items: center;

   .description-type {
    display: flex;
    flex-direction: column;
    gap: 5px;
   }

   .description-type h2 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-grey-4);
   }

   .description-type p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-3);
   }

   .color-card {
    width: 4px;
    position: absolute;
    height: 100%;
    background-color: ${(props) => (props.colorCard === "Entrada" ? "var(--color-secundary)" : "var(--color-grey-2)" )};
    left: 0;
   }

   .value-button {
    display: flex;
    gap: 10px;
    align-items: center;
   }

   .value-button p {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-4);
   }

   .value-button button {
    width: 22px;
    height: 22px;
    border: none;
    background: #E9ECEF;
    border-radius: 2px;
    cursor: pointer;
   }

`