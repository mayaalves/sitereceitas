import React from "react";
import * as S from "./StyleMain3";

export default function Main3() {
  return (
    <S.Container>
      <h2>SUBSCRIBE</h2>
      <h3>Sign up for newsletter</h3>
      <S.Input placeholder="Your Email" />
      <S.Button>SUBMIT</S.Button>
    </S.Container>
  );
}