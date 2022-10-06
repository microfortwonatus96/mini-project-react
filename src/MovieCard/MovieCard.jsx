import React from 'react'
import '../MovieCard/MovieCard.css'

const MovieCard = ({movies}) => {
    return (
        <div className="card-movies">
            <div className="overlay">
              <img src={`https://image.tmdb.org/t/p/w200/${ movies && movies.poster_path}`} alt={`${movies && movies.title} Poster`}/>
            </div>
            <div class="card-body-movies">
              <section class="d-flex justify-content-between">
                <div>
                  <i class="bi bi-play-circle-fill card-icon"></i>
                  <i class="bi bi-plus-circle card-icon"></i>
                </div>
                <div>
                  <i class="bi bi-arrow-down-circle-fill card-icon"></i>
                </div>
              </section>
              <section class="d-flex justify-content-between align-items-center mt-2">
                <p class="netflix-card-text m-0" style={{color:'rgba(0, 186, 0)'}}>Id: {movies.id}</p>
              </section>
              <p class="netflix-card-text m-0 text-white d-flex justify-content-start" >
                <span style={{paddingRight: '20px', color:'rgba(0, 186, 0)'}}>Title: {movies.title}</span>  
              </p>
              <p class="netflix-card-text m-0 text-white d-flex justify-content-start" >
                <span style={{paddingRight: '20px', color:'rgba(0, 186, 0)'}}>Popularity: {movies.popularity}</span>  
              </p>
              <p class="netflix-card-text m-0 text-white d-flex justify-content-start">
                  <span style={{color:'rgba(0, 186, 0)'}}>Overview: {movies.overview}</span>
              </p>             
            </div>
        </div>
    )
}

export default MovieCard