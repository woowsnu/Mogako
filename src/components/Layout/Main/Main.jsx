import React from "react";
import styled from "styled-components";
import CampCard from "../../CampCard";
import CommunityCard from "../../CommunityCard";
import MainBanner from "./MainBanner";

const Main = () => {
  return (
    <>
      <MainBanner />
      <section className="camp-area">
        <CardWrap>{<CampCard />}</CardWrap>
      </section>
      <section className="community-area">
        <CardWrap>{<CommunityCard />}</CardWrap>
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