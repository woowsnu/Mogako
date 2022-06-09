import React from "react";
import styled from "styled-components";
import EventBanner from "../../../components/Banner/EventBanner";
import CampCard from "../../../components/CampCard/CampCard";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";

const Main = () => {
  return (
    <Container>
      <section className="camp-area">
        <h2>인기 부트 캠프</h2>
        <Wrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </Wrap>
        <h2>특가 할인 캠프</h2>
        <Wrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </Wrap>
      </section>
      <EventBanner />
      <section className="community-area">
      <h2>커뮤니티</h2>
        <Wrap>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </Wrap>
      </section>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  display: flex;
  max-width: 960px;
  justify-content: space-between;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
