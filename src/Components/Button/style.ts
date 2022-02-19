import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100px;
    height: 42px;
    background: #f7d633;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    border: none;
    color: black;
    font-family: Roboto;
    font-style: Medium;
    font-size: 18px;
    line-height: 26px;
  }
`;
