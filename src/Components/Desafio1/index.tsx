import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";
import { Container } from "./style";

const Desafio1 = () => {
  const [lista, setLista] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(0);

  const piramide = (numero: number) => {
    if (numero >= 0) {
      let newArray = [];
      for (let i = 1; i <= numero; i++) {
        newArray.push("*".repeat(i));
      }
      setLista(newArray);
    } else {
      toast.error("Numero invalido");
    }
  };

  return (
    <Container>
      <div className="title_container">
        <h1>Desafio 1</h1>
        <p>
          Escreva um algoritmo que mostre na tela uma escada de tamanho n
          utilizando o caractere * e espaços. A base e altura da escada devem
          ser iguais ao valor de n. A última linha não deve conter nenhum
          espaço.
        </p>
      </div>
      <div className="form_container">
        <Input
          label="Digite o valor de n"
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="n"
        />
        <Button children="Run" onClick={() => piramide(number)} />
      </div>
      <div className="result_container">
        <>
          <h2>Resultado:</h2>
          <div className="result">
            {lista.map((string) => (
              <span key={string}>{string}</span>
            ))}
          </div>
        </>
      </div>
    </Container>
  );
};

export default Desafio1;
