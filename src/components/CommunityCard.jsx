import React from "react";
import styled from "styled-components";

const CommunityCard = () => {
  return (
    <CardContainer>
      <span>조회수 TOP</span>
      <span>취업 고민</span>
      <h3>합격 메일 답장 이렇게 할까요?</h3>
      <p>고칠 부분이 있는지 봐주시면 감사하겠습니다!</p>
      <div className="commented-user">
        <img src="#" alt="avatar" />
        <p>멘토 12343</p>
      </div>
      <button>+더보기</button>
    </CardContainer>
  );
};

export default CommunityCard;

const CardContainer = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    width: 224px;
    height: 280px;
    border-radius: 10px;
    padding: 0 16px;
    color: #fff;
    background: #eee;
    `;
