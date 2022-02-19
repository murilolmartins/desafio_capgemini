import { InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <Container>
      <label>{label}</label>
      <input {...rest} />
    </Container>
  );
};

export default Input;
