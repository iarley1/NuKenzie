import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Inter";
    }

    
    :root {
        --color-primary: #FD377E;
        --color-primary-2:  #E34981;
        --color-secundary: #03B898;
        --color-grey-1: #f8f9fa;
        --color-grey-2: #E9ECEF;
        --color-grey-3: #868e96;
        --color-grey-4: #212529;
        --color-grey-5: #343A40;

        --color-white-fixed: #ffffff;
        --color-sucess: #3fe864;
        --color-negative: #e83f5b;
    }

`