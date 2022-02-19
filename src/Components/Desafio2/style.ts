import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  .title_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }

  .form_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
  .result_container {
    width: 30%;
  }

  .result {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 100px;
  }
`;
