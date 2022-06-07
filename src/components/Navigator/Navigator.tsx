import React from "react";
import styled from "styled-components";
import color from "../../styles/color"

const Navigator = () => {
  return (
    <Container>
      <img src={require("../../assets/images/icons/ic-person-white.png")} alt="main-logo"/>
      <img src={require("../../assets/images/icons/ic-person-white.png")} alt="util-icon"/>
    </Container>
  );
};

export default Navigator;

const Container = styled.header`
  background-color: ${color.primary3}
`