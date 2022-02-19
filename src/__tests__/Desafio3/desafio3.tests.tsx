import { render, screen, fireEvent } from "@testing-library/react";
import Desafio3 from "../../Components/Desafio3";

describe("Componente Desafio2", () => {
  test("Quando a palavra for ovo o numero de pares de anagramas sera 2", async () => {
    render(<Desafio3 />);

    const input = screen.getByPlaceholderText("palavra");

    fireEvent.change(input, {
      target: {
        value: "ovo",
      },
    });

    const result = await screen.findByText(
      "Sua palavra tem 2 pares de anagramas"
    );

    expect(result).toBeInTheDocument();
  });

  test("Quando a palavra for ifailuhkqq o numero de pares de anagramas sera 3", async () => {
    render(<Desafio3 />);

    const input = screen.getByPlaceholderText("palavra");

    fireEvent.change(input, {
      target: {
        value: "ifailuhkqq",
      },
    });

    const result = await screen.findByText(
      "Sua palavra tem 3 pares de anagramas"
    );

    expect(result).toBeInTheDocument();
  });
});
