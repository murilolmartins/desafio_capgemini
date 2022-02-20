import { useState } from "react";
import Input from "../Input";
import { Container } from "./style";

const Desafio3 = () => {
  const [counter, setCounter] = useState<number>(0);

  const sortWord = (word: string) => {
    return word.split("").sort().join("");
  };

  const anagrams = (word: string) => {
    let count = 0;
    let list: string[] = [];
    let result: string[] = [];

    for (let i = 0; i < word.length; i++) {
      list.push(word[i]);
      let str = word[i];
      for (let j = i + 1; j < word.length; j++) {
        list.push(str + word[j]);
        str = str + word[j];
      }
    }

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (
          sortWord(list[i]) === sortWord(list[j]) &&
          !result.includes(list[i])
        ) {
          result.push(list[i]);
          count++;
        }
      }
    }

    setCounter(count);
  };

  return (
    <Container>
      <div className="title_container">
        <h1>Desafio 3</h1>
        <p>
          Débora digitou uma string aleatória no campo de senha, porém ela não
          tem certeza se é uma senha forte. Para ajudar Débora, construa um
          algoritmo que informe qual é o número mínimo de caracteres que devem
          ser adicionados para uma string qualquer ser considerada segura.
        </p>
      </div>
      <div className="form_container">
        <Input
          label="Digite a palavra"
          type="text"
          placeholder="palavra"
          onChange={(e) => anagrams(e.target.value)}
        />
      </div>
      <div className="result_container">
        <>
          <h2>Resultado:</h2>
          <div className="result">
            <p>{`Sua palavra tem ${counter} pares de anagramas`}</p>
          </div>
        </>
      </div>
    </Container>
  );
};

export default Desafio3;
