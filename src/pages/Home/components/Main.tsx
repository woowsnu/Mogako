import React from "react";
import styled from "styled-components";
import EventBanner from "../../../components/Banner/EventBanner";
import CampSection from "./CampSection";
import CommunitySection from "./CommunitySection";

const Main = () => {
  return (
    <Container>
      <CampSection />
      <EventBanner />
      <CommunitySection />
    </Container>
  );
};

export default Main;

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;