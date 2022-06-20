import React from "react";
import * as S from "./StyleMain2";
import Sal from "../Imgs/Sal.png";

export default function Main2() {
  return (
    <S.Container>
      <S.Img src={Sal} alt="" />
      <S.BoxDialogo>
        <h2>ABOUT</h2>
        <h3>____</h3>
        <S.P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
          tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
          dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
          quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
          sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
          Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum
          nisl ante, et ultricies sapien facilisis aliquam.
        </S.P>
      </S.BoxDialogo>
    </S.Container>
  );
}