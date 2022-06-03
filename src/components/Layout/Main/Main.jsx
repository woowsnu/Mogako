import React from "react";
import styled from "styled-components";
import CampCard from "../../CampCard";
import CommunityCard from "../../CommunityCard";

const Main = () => {
  return (
    <>
      <section className="main-bg">
        <div>
          <h4>개발은 <br />카페인과 함께</h4>
          <img src="#" />
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
        <img src="#" />
      </section>
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