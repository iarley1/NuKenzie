import styled  from "styled-components"

export const StyledListTransaction = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    gap: 20px;

    .div-card-default {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .li-default {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
        padding: 0 0 0 35px;
        width: 100%;
        height: 87px;
        gap: 10px;
        position: relative;
        border-radius: 4px;
        max-width: 100%;
    }

    .li-default div:nth-child(2) {
        width: 350px;
        height: 17px;
        background-color: var(--color-grey-2);
        max-width: 100%;
    }

    .li-default div:nth-child(3) {
        width: 150px;
        height: 17px;
        background-color: var(--color-grey-2);
        max-width: 100%;
    }

    .color-card-default {
        width: 4px;
        position: absolute;
        height: 100%;
        background-color: var(--color-grey-2);
        left: 0;
    }

    .div-filter {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .div-filter h3 {
        font-weight: 780;
        font-size: 1rem;
    }

    section {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    h4 {
        font-weight: 700;
        font-size: 1.375rem;
    }

    section button {
        padding: 10px 20px;
        border-radius: 7px;
        border: none;
        background-color: var(--color-grey-2);
        cursor: pointer;
    }

    .todos {
        background-color: var(--color-primary);
        color: var(--color-white-fixed);
    }

    .entrada {
        background-color: var(--color-primary);
        color: var(--color-white-fixed);
    }

    .saida {
        background-color: var(--color-primary);
        color: var(--color-white-fixed);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    @media (min-width: 824px) {
        width: 60%;

        .div-filter {
            flex-direction: row;
            gap: 0px;
            margin-top: 0px;
        }

        .div-card-default {
            align-items: flex-start;
        }
    }
`