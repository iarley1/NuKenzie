import styled from "styled-components"

export const StyledDashBoard = styled.main `
   display: flex;
   justify-content: center;
   width: 100%;

   .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    padding: 0 20px;
    margin-top: 20px;
    justify-content: space-between;
    max-width: 100%;
   }

   @media (min-width: 824px) {
      .container {
         flex-direction: row;
         align-items: flex-start;
   }
   }
`