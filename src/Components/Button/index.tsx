import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <Container>
      <button {...rest}>{children}</button>
    </Container>
  );
};

export default Button;
