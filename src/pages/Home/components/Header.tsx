import React from "react";
import Navigator from "../../../components/Navigator/Navigator";
import styled from "styled-components";
import headerBg from "../../../assets/images/home_header_bg.jpg";

const Header = () => {
  return (
    <Container>
      <Navigator />
      <Wrap>
        <div>
          <h4 className="header-text">{`개발은 \n카페인과 함께`}</h4>
          <hr />
        </div>
        <img
          className="header-img"
          src={require("../../../assets/images/image.png")}
          alt="책상 위 물건들"
        />
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
    box-sizing: border-box;
    background-image: url(${headerBg});
    background-position: center;
    background-size: cover;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 0;

  .header-text {
    white-space: pre-line;
    color: #ffffff;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
  }

  .header-img {
    height: 400px;
    border-radius: 10px;
  }

  @media (max-width: 680px) {
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;

    .header-text {
      white-space: pre-line;
      color: #ffffff;
      font-weight: bold;
      font-size: 36px;
      line-height: 48px;
      text-align: left;
    }

    .header-img {
      width: 90vw;
      border-radius: 10px;
      margin: 0 auto;
    }
  }
`;
