import React from "react";
import PropTypes from "prop-types";
import './Movie.css';
//  최종 1. 영화상세페이지 만들기 위한 라우터 패키지 도구 import = Link컴포넌트 사용
import { Link } from "react-router-dom";

function Movie({year, title, summary, poster, genres, rating, posterLarge}){
    return(
        <div className="movie">
            {/* 최종 2. 객체를 전달 : <Link to={{pathname: 'URL', state: 'route props에 보내줄 데이터'}}></Link> */}
            {/* 영화상세페이지 사용을 위한 Link컴포넌트 사용 | state:는 route props에 보내줄 데이터 */}
            <Link to={{pathname: "/movie-detail", state: {year, title, summary, posterLarge, genres, rating},}}>
            {/* 영화카드를 클릭하면 /movie-detail(=Detail) 컴포넌트로 이동(=데이터와 함께)하게 될 것임 */}
            {/* 만약, console에서 state값이 undefined 나오면 (npm start=앱) 다시 시작하면 됨 */}
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h2 className="movie_title">{ title }</h2>
                    <p className="movie_year">{ year }</p>
                    <ul>
                        { genres.map((genre,index)=>{
                            return <li className="movie_genre" key={index}>{ genre }</li>
                        }) }
                    </ul>
                    {/* <p className="movie_rating">{ rating }/10</p> */}
                    {/* 최종. 시놉시스 180자로 제한 = slice(배열시작인덱스,배열끝인덱스앞까지) */}
                    <p className="movie_data">{ summary.slice(0,180) }...</p>

                    <p className="movie_rating">{rating}/10</p>
                </div>
            </Link>
        </div>
    );
};

// propTypes로 데이터 유효성 체크하기
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    posterLarge: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;