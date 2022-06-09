import React from "react";
import styled from "styled-components";
import Navigator from "../../components/Navigator/Navigator";
import Footer from "../../components/Footer/Footer";
import Main from "./components/Main";
import MainBanner from "./components/MainBanner";

const Home = () => {
  return (
    <Container>
      <Navigator />
      <MainBanner />
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
