import React from 'react'
import styled from "styled-components";

const EventBanner = () => {
  return (
    <Banner>
        <h2>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</h2>
    </Banner>
  )
}

export default EventBanner

const Banner = styled.div`
    box-sizing: border-box;
    width: 960px;
    height: 100px;
    padding-left: 42px;
    color: #fff;
    font-weight: 700;
    background-color: #7471FF;
`