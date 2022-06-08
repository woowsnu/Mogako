import React from "react";
import styled from "styled-components";
import EventBanner from "../Banner/EventBanner";
import CampCard from "../CampCard";
import CommunityCard from "../CommunityCard";

const Main = () => {
  return (
    <>
      <section className="camp-area">
        <h2>인기 부트 캠프</h2>
        <CardWrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </CardWrap>
        <h2>특가 할인 캠프</h2>
        <CardWrap>
          <CampCard />
          <CampCard />
          <CampCard />
          <CampCard />
        </CardWrap>
      </section>
      <EventBanner />
      <section className="community-area">
      <h2>커뮤니티</h2>
        <CardWrap>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </CardWrap>
      </section>
    </>
  );
};

export default Main;

const CardWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
