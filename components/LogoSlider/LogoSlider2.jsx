import { useRef, useEffect, useState } from "react";
import { Rerousel } from "rerousel";

const LogoSlider2 = () => {
  const ref = useRef(null);
  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 2);
    height: 100px;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;
    border: solid 1px black;
    background-color: #61dafb;

    @media (max-width: 1150px) {
      width: 100%;
    }
  `;

  return (
    <Rerousel itemRef={ref}>
      <Item ref={ref}>1</Item>
      <Item>2</Item>
      <Item>3</Item>
      <Item>4</Item>
      <Item>5</Item>
    </Rerousel>
  );
};

export default LogoSlider2;
