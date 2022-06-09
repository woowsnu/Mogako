import React from 'react'
import styled from "styled-components";
import fonts from "../../styles/font";

const EventBanner = () => {
  return (
    <Banner>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
    </Banner>
  )
}

export default EventBanner

const Banner = styled.div`
    ${fonts.H2}
    box-sizing: border-box;
    width: 960px;
    height: 100px;
    margin-top: 44px;
    padding: 33px 0 33px 42px;
    color: #fff;
    background-color: #7471FF;
`