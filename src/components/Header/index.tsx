import { Link } from "react-router-dom";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="div-header">
        <h1><span>Nu</span> Kenzie</h1>
        <Link to="/">Inicio</Link>
      </div>
    </StyledHeader>
  );
};
