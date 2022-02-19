import { useState } from "react";
import Input from "../Input";
import { Container } from "./style";

const Desafio2 = () => {
  const [counter, setCounter] = useState<number>(6);

  const testPassword = (password: string) => {
    let count = 0;
    if (!password.match(/[a-z]/g)) {
      count = count + 1;
      console.log("a");
    }
    if (!password.match(/[A-Z]/g)) {
      count = count + 1;
      console.log("A");
    }
    if (!password.match(/[0-9]/g)) {
      count = count + 1;
      console.log("num");
    }
    if (!password.match(/[$@$!%*#?&´^~/><+=[\]{",;°§`º_().}\\¨-]/g)) {
      count = count + 1;
      console.log("@");
    }
    if (6 - password.length > count) {
      count = 6 - password.length;
    }

    setCounter(count);
  };

  return (
    <Container>
      <div className="title_container">
        <h1>Desafio 2</h1>
        <p>
          Débora digitou uma string aleatória no campo de senha, porém ela não
          tem certeza se é uma senha forte. Para ajudar Débora, construa um
          algoritmo que informe qual é o número mínimo de caracteres que devem
          ser adicionados para uma string qualquer ser considerada segura.
        </p>
      </div>
      <div className="form_container">
        <Input
          label="Digite a sua senha"
          type="text"
          placeholder="senha"
          onChange={(e) => testPassword(e.target.value)}
        />
      </div>
      <div className="result_container">
        <>
          <h2>Resultado:</h2>
          <div className="result">
            <p>{`Sua senha necessita de mais ${counter} digitos para ser segura`}</p>
          </div>
        </>
      </div>
    </Container>
  );
};

export default Desafio2;
