import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
import './css/font.css';
class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  render() {
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading......</span>
          </div>
          ) : (
            <div className="movies">
              {/* 배열값이 있을경우 { API배열데이터.map(map배열변수=>()) } */}
              { movies.map(movie=>(
                <Movie 
                  key = {movie.id}
                  id = {movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                  posterLarge = {movie.large_cover_image}
                  genres = {movie.genres}
                  rating= {movie.rating}
                />
              )) }
            </div>
            ) }
      </section>
    );
  };

  getMovies = async () =>{
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState( { movies: movies, isLoading: false } );
  }

  componentDidMount(){
    this.getMovies();
  }
}
export default Home;