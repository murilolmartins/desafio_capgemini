import Desafio1 from "../../Components/Desafio1";
import Desafio2 from "../../Components/Desafio2";
import Desafio3 from "../../Components/Desafio3";
import { Container } from "./style";

const Desafios = () => {
  return (
    <Container>
      <div className="challengers">
        <Desafio1 />
      </div>
      <div className="challengers">
        <Desafio2 />
      </div>
      <div className="challengers">
        <Desafio3 />
      </div>
    </Container>
  );
};

export default Desafios;
