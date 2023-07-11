import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { ListTrasaction } from "../../components/ListTransaction";
import { TotalMoney } from "../../components/TotalMoney";
import { StyledDashBoard } from "./style";

export const DashBoardPage = () => {
  return (
    <>
      <Header />
      <StyledDashBoard>
        <div className="container">
          <div>
            <Form />
            <TotalMoney />
          </div>
          <ListTrasaction />
        </div>
      </StyledDashBoard>
    </>
  );
};
