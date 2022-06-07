import React from "react";
import styled from "styled-components";
import Navigator from "../../components/Navigator/Navigator";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

const Home = () => {
  return (
    <Container>
      <Navigator/>
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: block;
  max-width: 960px;
  margin: 0 auto;
  background-color: #fff;
  color: #000;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
