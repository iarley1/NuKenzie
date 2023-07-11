import styled from "styled-components"

export const StyledHeader = styled.header `
   display: flex;
   justify-content: center;
   width: 100%;
   height: 88px;
   background-color: var(--color-grey-1);
   box-shadow: 0px 4px 32px -12px #00000040;

  .div-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    padding: 0 20px;
  }

  .div-header a {
    text-decoration: none;
    background-color: var(--color-grey-2);
    padding: 10px 15px;
    border-radius: 6px;
    color: var(--color-grey-4);
    font-weight: 600;
    font-size: 0.875rem;
  }

  .div-header a:hover {
    background-color: var(--color-grey-4);
    transition: 0.3s;
    color: var(--color-white-fixed);
  }

  .div-header h1 {
    cursor: default;
  }

  .div-header h1 > span {
    color: var(--color-primary);
  }

`