import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
function Navigation(){
    return (
        <nav className="nav">
            {/* 기본 href의 문제점 = 링크시 페이지 전체가 새로고침되고(리액트 부분 반영장점 없어짐), 
                                  HashRouter도 제대로 작동안됨(/about#/으로 나옴) */}
            {/* 해결=react-router-dom의 Link 컴포넌트 사용하면 됨 */}
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link> &nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>
        </nav>
    );
};
export default Navigation;