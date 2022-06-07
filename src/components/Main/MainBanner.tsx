import React from "react";
import styled from "styled-components";

const MainBanner = () => {
  return (
    <Container bgImg={require("../../assets/images/home_header_bg.jpg")}>
      <div>
        <h4>{`개발은 \n카페인과 함께`}</h4>
        <div className="img" style={{ backgroundImage: `url(${"../../assets/images/image.png"})` }} />
      </div>
    </Container>
  );
};

export default MainBanner;

const Container = styled.section<{ bgImg: string }>`
  background-image: url(${(props) => props.bgImg})
  padding: 104px 16px 56px;
  box-sizing: border-box;
  margin-bottom: 56px;

  .img {
    background-position: center;
    background-size: cover;
  }
`;
