import React from 'react'
import Navigator from '../../components/Navigator/Navigator'

const CampDetail = () => {
  return (
    <div>
      <Navigator />
      <div className='detail-header'>
        <div>멘토 이미지</div>
        <div>
          <div>
          <h3>주니어 개발자를 위한 React - 실무 프로젝트로 역량 업그레이드</h3>
          <div className='tags'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <table>
            <tr>
              <td>시작일</td>
              <td>2022.02.22~</td>
            </tr>
            <tr>
              <td>수업 과정</td>
              <td>6주 온라인 Live</td>
            </tr>
            <tr>
              <td>정원</td>
              <td>8명 소수정예</td>
            </tr>
          </table>
          <button>더 잘하는 개발자 되기</button>
          </div>
          <div>마감 알림</div>
        </div>
      </div>
    </div>
  )
}

export default CampDetail