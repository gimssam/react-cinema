import React from "react";
import './App.css';
import { HashRouter,  Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./routes/Home";
import About from "./routes/About";
//1. Detail 컴포넌트 추가
import Detail from "./routes/Detail";


function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* 2. 링크될 컴포넌트 라우터 추가 */}
      <Route path="/movie-detail" component={Detail}/>
      {/* 3. Movie 컴포넌트에 Link to로 경로와 넘길 props값 지정해줌 */}
    </HashRouter>
  );
}
export default App;

// 영화 상세정보 기능 = 포스터 클릭시 영화상세정보 나오게 하기
// route props 이해해야 함 : 라우팅 대상이 되는 컴포넌트(링크로 가는 컴포넌트들)에 넘겨주는 기본 props 
// 지정하지 않아도 기본으로 넘어가는 route props가 있음 = 여러값들이 넘어감 , console.log(props) 찍어보면 나옴
// route props에 데이터를 props에 맘대로 담아서 데이터를 넘길수 있음