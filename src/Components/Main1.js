import React from "react"
import * as S from "./StyleMain1"
import Bolo from "../Imgs/bolo.png"
import Pizza from "../Imgs/pizza.png"
import Vitamina from "../Imgs/banana.png"

export default function Main() {
  return (
    <>
      <S.Container>
        <S.Titulo>Latest Recipes</S.Titulo>
        <S.Barra>____</S.Barra>
        <S.Receitas>
          <S.BoxReceitas>
            <S.Img src={Bolo} alt="" />
            <S.BarraReceitas>___</S.BarraReceitas>
            <S.Nomereceita>Red Velvet Cake</S.Nomereceita>
          </S.BoxReceitas>
          <S.BoxReceitas>
            <S.Img src={Pizza} alt="" />
            <S.BarraReceitas>___</S.BarraReceitas>
            <S.Nomereceita>Margherita Pizza</S.Nomereceita>
          </S.BoxReceitas>
          <S.BoxReceitas>
            <S.Img src={Vitamina} alt="" />
            <S.BarraReceitas>___</S.BarraReceitas>
            <S.Nomereceita>Peanut Smoothie</S.Nomereceita>
          </S.BoxReceitas>
        </S.Receitas>
      </S.Container>
    </>
  )
}