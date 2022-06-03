import React from "react";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="footer-logo">
        <img src="#" alt="logo" />
      </div>
      <div className="footer-copy-text">
        <p>대표: 문선화. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호</p>
        <p>Copyright by (주)카페인. All right reserved.</p>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
      </div>
      <div className="footer-sns-icon">
        <img src="#" alt="facebook" />
        <img src="#" alt="instagram" />
        <img src="#" alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
