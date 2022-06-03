import React from "react";
import styled from "styled-components";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import Main from "../../components/Layout/Main/Main"

const Home = () => {
  return (
    <Container>
      <Header/>
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
