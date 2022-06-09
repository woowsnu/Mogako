import React from "react";
import styled from "styled-components";
import fonts from "../../styles/font"

const CampCard = () => {
  return (
    <CardContainer>
      <h5>모집중</h5>
      <h3>개발자 없이 SQL로 데이터 추출하고 대시보드 만들기</h3>
      <p>2월 13일 시작</p>
    </CardContainer>
  );
};

export default CampCard;

const CardContainer = styled.div`
    box-sizing: border-box;
    width: 224px;
    height: 280px;
    border-radius: 10px;
    padding: 0 16px;
    color: #fff;
    background: #eee;
    ${fonts.H3}
    `;
