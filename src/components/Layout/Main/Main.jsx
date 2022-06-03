import React from "react";
import styled from "styled-components";
import EventBanner from "../../Banner/EventBanner";
import CampCard from "../../CampCard";
import CommunityCard from "../../CommunityCard";
import MainBanner from "./MainBanner";

const Main = () => {
  return (
    <>
      <MainBanner />
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

  @media (max-width: 680px) {
    white-space: pre-line;
  }
`;
