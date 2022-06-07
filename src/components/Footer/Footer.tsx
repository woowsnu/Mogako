import React from "react";
import styled  from "styled-components";
import color from "../../styles/color";

const Footer = () => {
  return (
    <Container>
      <div>
        <img className="footer-logo" src={require("../../assets/images/logo-primary.png")} alt="logo" />
      </div>
      <div className="footer-text">
        <p>대표: 문선화. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</p>
        <p>Copyright by (주)카페인. All right reserved.</p>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
      </div>
      <div className="footer-icon">
        <img src="#" alt="facebook" />
        <img src="#" alt="instagram" />
        <img src="#" alt="twitter" />
      </div>
    </Container>
  );
};

export default Footer;


const Container = styled.div`
  display: flex;
  background-color: ${color.gray5}

  .footer-logo {
    width: 72px;
  }

  .footer-text {
    color: ${color.gray2}
  }
`