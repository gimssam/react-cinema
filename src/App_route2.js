import React from "react";
import './App.css';
// 1. 라우터 사용을 위한 도구 import = react-router-dom 중 HashRouter,Route 컴포넌트만 사용
import { HashRouter,  Route } from "react-router-dom";
// 1-1. Navigation 컴포넌트 import
import Navigation from './components/Navigation';
// 2. 라우터 사용을 위한 링크될 컴포넌트들 import
import Home from "./routes/Home";
import About from "./routes/About";


function App(){
  return (
    // 3-1. react-router-dom 도구의 컴포넌트 HashRouter를 반드시 부모로 코딩
    // HashRouter 컴포넌트 특성상 URL에 #붙음 
    <HashRouter>
      {/* 3-2. Route 컴포넌트의 props로 경로(path) 사용할 컴포넌트(component) 가져옴 */}
      {/* exact props는 Route 컴포넌트가 path props와 정확히 일치 해야만 일치하는 URL에만 반응하도록 해줌 */}
      {/* 아니면, / -> /home -> /home/about 순으로 모두 출력해줌 */}
      <Route path="/" component={Home} />
      {/* localhost:3000/#/about에 접속하면 Home컴포넌트와 아래 About컴포넌트를 모두 그려줌 */}


      {/* 그래서, root일 경우 exact={true}를 반드시 코딩하여 루트임을 알려줘야 함 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}
export default App;

// 라우터 만들기 : 라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러줌
// localhost:3000/home 입력하면 Home컴포넌트 페이지로 이동
// react-router-dom은 여러 라우터 제공 | 우리는 HashRouter, Route 컴포넌트를 사용
// <Route> 컴포넌트 = 2가지 props값 전달가능
// a. URL 경로 props  b. 페이지에 사용할 컴포넌트 props

// Route path 속성 작동방식 : (예)브라우저 /home/introduce 입력한다고 가정
// (루트) -> /home -> /home/introduce 순서대로 그림 = 3개의 컴포넌트 내용을 모두 그림
// 위의 문제점을 해결하기 위해 exact={true}를 사용함 
// = Route 컴포넌트가 path props에 정확하게 일치하는 URL만 그려주게 됨