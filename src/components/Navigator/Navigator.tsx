import React from "react";
import styled from "styled-components";
import color from "../../styles/color"

const Header = () => {
  return (
    <Container>
      <img src="#" alt="main-logo"/>
      <img src="#" alt="util-icon"/>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: ${color.primary3}
`