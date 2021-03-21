// 상세페이지 콘텐츠 링크 컴포넌트 

import React, { Component } from "react";
// #2. Detail 컴포넌트를 클래스형 컴포넌트로 변경 
// : componentDidMount()사용하여 Detail컴포넌트 마운트시 push()함수 쓰기 위하여
class Detail extends Component {
    // a. Detail 컴포넌트가 마운트되면
    componentDidMount() {
        // b. 구조분해할당으로 location, histroy의 키 값를 얻고 = 매개변수에 값 할당
        const { location, history } = this.props;
        // c. location.state가 없는 경우
        // d. Home 컴포넌트로 자동 이동됨. (localhost:3000/#/movie-detail로 접속시)
        location.state===undefined && (history.push('/'));
        
        // c. location.state가 없는 경우
        // if(location.state === undefined){
        // // d. Home 컴포넌트로 이동시킴
        //     history.push('/');
        // }
    }
    // Home화면에서 링크영역 클릭시, render()함수로 화면에 그려줌
    render() {
        // e. Movie props에서 보낸 키값을 구조분해할당 location에 저장
        const { location } = this.props;
        return(
            // f. 일단 Movie에서 보낸 location.state props에서 넘어온 데이터 중 영화 제목만 일단 출력 
            <ul>
                <li><img src={ location.state.poster } alt={ location.state.title } /></li>
                <li>{ location.state.title }</li>
                <li>{ location.state.year }</li>
                <li>{ location.state.genres }</li>
                <li>{ location.state.summary }</li>
                <li>{ location.state.rating }</li>
            </ul>
        );
    // (주의.브라우저 주소 localhost:3000/#/movie-detail로 접속시는 에러남)
    }
}
export default Detail;