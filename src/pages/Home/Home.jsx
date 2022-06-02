import React from "react";
import styled from "styled-components";
import CampCard from "../../components/CampCard";
import CommunityCard from "../../components/CommunityCard";

const Home = () => {
  return (
    <Container>
      <header>
        <p>caffein</p>
        <i></i>
      </header>
      <section className="main-bg">
        <div>
          <h4>
            개발은
            <br />
            카페인과 함께
          </h4>
          <img src="#" />
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
        <img src="#" />
      </section>
      <main className="camp-area">
        <CampWrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </CampWrap>
        <CampWrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </CampWrap>
      </main>
      <section className="community-area">
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 36px; 42px;
  background-color: #fff;
  color: #000;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;

const CampWrap = styled.div`
  display: flex;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
