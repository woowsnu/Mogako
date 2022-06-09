import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "../../components/Footer/Footer";

import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
