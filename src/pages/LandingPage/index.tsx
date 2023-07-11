import { Link } from "react-router-dom";
import illustration from "../../asserts/img/Illustration.svg";
import { StyledLandingPage } from "./style";

export const LandingPage = () => {
  return (
    <StyledLandingPage>
      <div className="container">
        <div className="box">
          <h1>
            Nu <span>Kenzie</span>
          </h1>
          <h2>Centralize o controle das suas finanças</h2>
          <p>de forma rápida e segura</p>
          <Link to="/dashboard">Iniciar</Link>
        </div>
        <img src={illustration} alt="illustration" />
      </div>
    </StyledLandingPage>
  );
};
