import styled from "styled-components";

export const DivFooter = styled.div`
  background-color: #f2f4f1;
  height: 40vh;
  display: flex;
`;

export const DivRedesSociais = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const Teste = styled.div`
  width: 80%;
  height: 20%;
  margin-left: 10vh;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 6%;
  margin-left: 1.5%;
`;

export const DivBotao = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
`;

export const Botao = styled.button`
  width: 20%;
  height: 6vh;
  background-color: #f2f4f1;
  border: none;
  cursor: pointer;

  &:hover {
    border: 3px solid #373737;
  }
`;