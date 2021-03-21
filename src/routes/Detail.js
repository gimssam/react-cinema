import React, { Component } from "react";
import "./Detail.css";

class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        location.state===undefined && (history.push('/'));
    }
    
    // (주의.브라우저 주소 localhost:3000/#/movie-detail로 접속시는 에러남)
    // 이유 : render() 함수 실행 후 componentDitMount()가 실행되기때문에 render()의 값을 못 받아옴 = undefined
    // 해결방법 : render()함수에도 componentDitMount()에 작성한 리다이넥트 코드 추가해 주어야 함
    render() {
        const { location } = this.props;
        // #1-1. if문 : return () 안의 JSX 내에서는 사용 불가능
        // 복잡한 if문 사용할때는 JSX밖에서 사용하거니, 즉시실행함수 = function(if{}else{});로 사용
        // 그래서 여기서는 if문을 바깔쪽에 쓰고 실행문 영역에 return()을 써주고 안쪽에 코딩
        // if(location.state){
            //     return(
                //         // f-a. 일단 Movie에서 보낸 location.state props에서 넘어온 데이터 중 영화 제목만 일단 출력 
                //         // f-b. 그후 Movie에서 보낸 location.state props에서 넘어온 데이터 중 원하는거 모두 출력 
                //         <ul>
                //             <li><img src={ location.state.poster } alt={ location.state.title } /></li>
                //             <li>{ location.state.title }</li>
                //             <li>{ location.state.year }</li>
                //             <li>{ location.state.genres }</li>
                //             <li>{ location.state.summary }</li>
                //             <li>{ location.state.rating }</li>
                //         </ul>
                //     );
                // }else{
                    //     // f-c. 값이 없을경우(브라우저에 바로 주소치고 들어갔을때 null반환 
                    //     // 즉, render()함수 종료후 componentDitMount의 리다이렉트 실행되고 Home컴포넌트로 이동
                    //     return null;
                    // }
        // #1-2. 삼항조건연산자 사용
            // return(<>{location.state?('aaa'):("bbb")}</>);
            return(
                <div className="detail">{ location.state ? (
                    <ul>
                        <li><img src={ location.state.posterLarge } alt={ location.state.title } /></li>
                        <li>{ location.state.title }</li>
                        <li>{ location.state.year }</li>
                        <li>{ location.state.genres }</li>
                        <li>{ location.state.summary }</li>
                        <li><span  className="fontColorRed">{ location.state.rating }</span> / 10</li>
                    </ul>
                ) : (null)}
                </div>);

}
}

export default Detail;