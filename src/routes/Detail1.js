// 상세페이지 콘텐츠 링크 컴포넌트 
import React from "react";

// #1. Movie.js에서 보낸 데이터 = state : { year, title, summary, poster, genres }
// 반드시, route props를 이해해야 함.
// route props : 라우팅 대상이 되는 컴포넌트에 넘겨주는 기본 props가 있음 (아래 콘솔값임)
// {history: {...}, location: {...}, match: {...}, staticContext: undefined } 
// = Route 컴포넌트가 그려줄 컴포넌트에 전달한 기본 props임
function Detail(props){
    // 콘솔로 state 값 확인 : 
    // 영화카드 클릭해서 링크로 안 들어가고, /movie-detail로 브라우저에 직접 입력할 경우
    console.log(props);
    // console 확인시 location객체안에 Route관련 키값이 있음
    // location > state: undefined로 나옴 = Movie 컴포넌트의 state값이 안 넘어왔음
    // 아래 텍스트만 출력됨
    return <h2>Detail 페이지</h2>
    // 이럴 경우 값이 안 넘어 왔으므로, 리다이렉트 기능으로, 강제로 Home 컴포넌트로 [리다이렉트] 해야 함
    // route props에 history키 이용하면 됨 | localhost:3000 접속 -> 아무 카드눌러 이동 -> 콘솔에 history키 확인
    // history키 중 go, goBack, goForward = 이게 다 URL 변경 함수 / 이중 push()함수 = 지정한 URL로 보내줌
}

export default Detail;