import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
class App extends Component {
  // state
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state
    return (
      <div>
        { isLoading ? 'Loading......' : movies.map((movie)=>{
          console.log(movie);
          //4. Movie 컴포넌트에 props 전달 = Movie 컴포넌트에 props 설정한것 모두 전달
          return(
            <Movie
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
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState( {movies: movies, isLoading: false} );
  }

  componentDidMount(){
    this.getMovies();
  }

}
export default App;

// 지금까지 총정리
// 1. 영화 API를 통해 사용할 데이터들을 불러옴
// 2. API를 가져올때 axios.get()함수 사용 = 데이터 가져올 시간이 필요하므로 async, await 사용
// 3. state에 API데이터가 저장or업데이트 되면 => Movie컴포넌트가 그려지도록 코딩