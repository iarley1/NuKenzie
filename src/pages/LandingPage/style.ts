import styled from "styled-components"

export const StyledLandingPage = styled.div `
  width: 100%;
  height: 100vh;
  background-color: #212529;
  position: absolute;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .box {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 500px;
    max-width: 90%;
    padding: 10px 35px 20px;
    gap: 15px;
    border-radius: 5px;
    background-color: #212529;
  }

  h1 {
    color: var(--color-primary);
  }

  h1 > span {
    color: var(--color-white-fixed);
  }

  .box h2 {
    color: var(--color-white-fixed);
    font-size: 2rem;
    font-weight: 800;
    line-height: 48px;
  }

  .box p {
    color: var(--color-white-fixed);
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 241px;
    height: 48px;
    max-width: 100%;
    background: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    font-weight: 500;
    font-size: 1rem;
    color: var(--color-white-fixed);
    cursor: pointer;
  }

  @media(min-width: 824px) {
    .container {
        margin: 0 auto;
        width: 1400px;
        height: 700px;
        max-width: 100%;
        gap: 40px;
        margin-top: 100px;
    }
    .box {
        position: static;
        min-width: 330px;
        width: 430px;
    }
    img {
        width: 50%;
        height: 100%;
        max-width: 100%;
    }
}
`