import React from "react";
import CampCard from "../../../components/CampCard/CampCard";

import styled from "styled-components";
import fonts from "../../../styles/font";

const CampSection = () => {
  return (
    <Container>
      <h2 className="card-title">인기 부트 캠프</h2>
      <div className="card-wrap">
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
      </div>
      <h2 className="card-title">특가 할인 캠프</h2>
      <div className="card-wrap">
        <CampCard />
        <CampCard />
        <CampCard />
        <CampCard />
      </div>
    </Container>
  );
};

export default CampSection;

const Container = styled.section`
  max-width: 960px;
  margin: auto;
  padding: 12px 0;

  .card-wrap {
    display: flex;
    justify-content: space-between;
  }

  .card-title {
    ${fonts.H2}
    padding-top: 48px;
  }
`;
