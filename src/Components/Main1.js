import React from "react";
import * as S from "./StyleMain1";
import Bolo from "../Imgs/bolo.png";
import Pizza from "../Imgs/pizza.png";
import Vitamina from "../Imgs/banana.png";

export default function Main() {
  return (
    <>
      <S.Container>
        <h2>Latest Recipes</h2>
        <h3>____</h3>
        <S.Receitas>
          <S.BoxReceitas>
            <S.Img src={Bolo} alt="" />
            <h2>___</h2>
            <h3>Red Velvet Cake</h3>
          </S.BoxReceitas>
          <S.BoxReceitas>
            <S.Img src={Pizza} alt="" />
            <h2>___</h2>
            <h3>Margherita Pizza</h3>
          </S.BoxReceitas>
          <S.BoxReceitas>
            <S.Img src={Vitamina} alt="" />
            <h2>___</h2>
            <h3>Peanut Smoothie</h3>
          </S.BoxReceitas>
        </S.Receitas>
      </S.Container>
    </>
  );
}