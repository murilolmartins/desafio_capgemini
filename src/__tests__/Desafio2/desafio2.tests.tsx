import { render, screen, fireEvent } from "@testing-library/react";
import Desafio2 from "../../Components/Desafio2";

describe("Componente Desafio2", () => {
  test("Quando a senha for Ya3, o resultado deve ser 3", async () => {
    render(<Desafio2 />);

    const input = screen.getByPlaceholderText("senha");

    fireEvent.change(input, {
      target: {
        value: "Ya3",
      },
    });

    const result = await screen.findByText(
      "Sua senha necessita de mais 3 digitos para ser segura"
    );

    expect(result).toBeInTheDocument();
  });
});
