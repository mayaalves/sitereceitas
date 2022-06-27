import React from "react";
import Logo from "../Imgs/logo.png";
import Fundo from "../Imgs/Fundo.png";
import * as S from "./StyleHeader";

export default function Header() {
  return (
    <S.DivHeader>
      <S.Img src={Logo} alt="Logo" />
      <S.DivBotao>
        <S.Botao>ABOUT</S.Botao>
        <S.Botao>RECIPES</S.Botao>
        <S.BotaoSubScribe>SUBSCRIBE</S.BotaoSubScribe>
      </S.DivBotao>
      <S.Teste>
        <S.ImgFundo src={Fundo} alt="Fundo" />
      </S.Teste>
      <S.DivH1>
        <h1>RECIPES</h1>
      </S.DivH1>
    </S.DivHeader>
  );
}