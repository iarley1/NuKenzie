import styled from "styled-components"

interface iPropsStyled {
    errosValue: object | undefined
    errosDescription: object | undefined
}

export const StyledForm = styled.form<iPropsStyled> `
   display: flex;
   flex-direction: column;
   border: 1px solid var(--color-grey-2);
   border-radius: 4px;
   padding: 25px 20px;
   gap: 10px;
   max-width: 400px;

   label {
    font-size: 0.875rem;
    font-weight: 400;
   }

   .div-input {
    display: flex;
    flex-direction: column;
    gap: 7px;
   }

   input {
     background-color: var(--color-grey-1);
     border-radius: 8px;
     border: 2px solid;
     height: 52px;
     outline: none;
     padding: 0 10px;
   }

   .input-description {
    border-color: ${(props) => (props.errosDescription ? "var(--color-negative)" : "var(--color-grey-2)" )};
   }

   .input-value {
    border-color: ${(props) => (props.errosValue ? "var(--color-negative)" : "var(--color-grey-2)" )};
    width: 100%;
   }

   .erro-input {
     font-size: 0.75rem;
     color: var(--color-negative);
   }

   .div-description {
    display: flex;
    flex-direction: column;
   }

   .div-description span {
    font-weight: 400;
    font-size: 0.75rem;
    color: var(--color-grey-3);
   }

   .div-value-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
   }

   .div-type {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 40%;
   }

   .div-type select {
    background-color: var(--color-grey-1);
    border-radius: 8px;
    border: 2px solid var(--color-grey-2);
    height: 52px;
    outline: none;
    padding: 0 10px;
   }

   button {
     background-color: var(--color-primary);
     color: var( --color-white-fixed);
     border-radius: 8px;
     margin-top: 10px;
     height: 48px;
     font-weight: 500;
     font-size: 1rem;
     border: 1px solid var(--color-primary);
     cursor: pointer;
   }

   @media (min-width: 824px) {
      max-width: 400px;
    }

`