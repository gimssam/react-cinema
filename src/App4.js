import React, { Component } from 'react';
import axios from 'axios';
// 부모 컴포넌트에서 Movie 컴포넌트로 props이용하여 데이터 보내줌 | movies.map() 사용
import Movie from './Movie';
class App extends Component {
  // state
  state = {
    isLoading: true,
    // axios.get()에서 받아온 API 영화데이터 state에 배열에 저장
    movies: [],
  };

  // render()함수
  render() {
    // 2. 구조분해할당 movies 데이터 얻어냄
    const { isLoading, movies } = this.state
    // 3. 자식 컴포넌트 Movie.js에 보내줄 배열 API데이터 map()이용 추출 
    return (
      <div>
        { isLoading ? 'Loading....중' : movies.map((movie)=>{
          console.log(movie);
          //4. Movie 컴포넌트에 props 전달 = Movie 컴포넌트에 props 설정한것 모두 전달
          return(
            <Movie
              // 콘솔에 key관련 에러 사라짐
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.medium_cover_image}
              rating = {movie.rating}
            />
          );
        }) }
      </div>
    );
  };

  getMovies = async () =>{
    // 변수 할당을 ES6 구조분해할당으로 변경 (데이터값 사용 더 편리)
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
    const {
      data: {
        data: { movies },
      },
      // 1. rating 기준으로 정렬기능이 추가된 axios.get()값 수정
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    console.log(movies);
    // console.log(movies.data.data.movies);
    this.setState( {movies: movies, isLoading: false} );
  }

  componentDidMount(){
    this.getMovies();
  }

}
export default App;