import React from "react";
import styled from "styled-components";

const Navigator = () => {
  return (
    <Container>
      <img className="logo" src={require("../../assets/images/logo-white.png")} alt="main-logo"/>
      <img className="ic-person" src={require("../../assets/images/icons/ic-person-white.png")} alt="util-icon"/>
    </Container>
  );
};

export default Navigator;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .logo {
    width: 88px;
    height: 24px;
  }

  .ic-person {
    width: 24px;
    height: 24px;
  }
`