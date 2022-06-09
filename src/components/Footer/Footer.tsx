import React from "react";

import styled from "styled-components";
import color from "../../styles/color";
import fonts from "../../styles/font";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <img
          className="footer-logo"
          src={require("../../assets/images/logo-primary.png")}
          alt="logo"
        />
        <div className="footer-text">
          <div>대표: 문선화. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</div>
          <br />
          <div>Copyright by (주)카페인. All right reserved.</div>
          <div>이용약관 개인정보처리방침</div>
        </div>
        <div className="footer-icons">
          <img className="footer-icon" src={require("../../assets/images/icons/ellipse.png")} alt="sns" />
          <img className="footer-icon" src={require("../../assets/images/icons/ellipse.png")} alt="sns" />
          <img className="footer-icon" src={require("../../assets/images/icons/ellipse.png")} alt="sns" />
        </div>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  min-height: 160px;
  background: ${color.gray5};
  margin-top: 242px;

  @media (max-width: 680px) {
    width: 100%;
    white-space: pre-line;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0 64px 0;
  }

  .footer-logo {
    width: 59px;
    height: 22px;
  }

  .footer-text {
    ${fonts.Body2}
  }

  .footer-icon {
    padding-left: 6px;
  }
`;
