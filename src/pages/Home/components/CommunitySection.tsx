import React from "react";
import CommunityCard from "../../../components/CommunityCard/CommunityCard";

import styled from "styled-components";
import fonts from "../../../styles/font";

const CommunitySection = () => {
  return (
    <Container>
      <h2 className="card-title">커뮤니티</h2>
      <div className="card-wrap">
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      <CommunityCard />
      </div>
    </Container>
  );
};

export default CommunitySection;

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
