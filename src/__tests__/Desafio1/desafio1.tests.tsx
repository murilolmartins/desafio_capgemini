import { render, screen, fireEvent } from "@testing-library/react";
import Desafio1 from "../../Components/Desafio1";

describe("Componente Desafio1", () => {
  test("Quando o valor de n for 5 deve se renderizar na tela uma piramide com base 5", async () => {
    render(<Desafio1 />);

    const button = screen.getByText("Run");

    const input = screen.getByPlaceholderText("n");

    fireEvent.change(input, {
      target: {
        value: 5,
      },
    });

    fireEvent.click(button);

    const lastLine = await screen.findByText("*****");

    expect(lastLine).toBeInTheDocument();
  });
});
