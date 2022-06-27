import React from "react";
import Facebook from "../Imgs/Facebook Ellipse.png";
import Instagram from "../Imgs/Instagram Ellipse.png";
import Twitter from "../Imgs/Twitter ellipse.png";
import Pinterest from "../Imgs/Pinterest Ellipse.png";
import * as S from "./StyleFooter";

export default function Footer() {
  return (
    <S.DivFooter>
      <S.DivRedesSociais>
        <S.Teste>
          <S.Img src={Instagram} alt="Instagram" />
          <S.Img src={Twitter} alt="Twitter" />
          <S.Img src={Facebook} alt="Facebook" />
          <S.Img src={Pinterest} alt="Pinterest" />
        </S.Teste>
      </S.DivRedesSociais>
      <S.DivBotao>
        <S.Botao>ABOUT</S.Botao>
        <S.Botao>RECIPES</S.Botao>
        <S.Botao>SUBSCRIBE</S.Botao>
      </S.DivBotao>
    </S.DivFooter>
  );
}