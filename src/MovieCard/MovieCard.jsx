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
              <div className="m-2">
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <span class="netflix-card-text m-0" style={{color:'rgb(195, 236, 10)',fontSize: '10px'}}>Id: {movies.id}</span>
                </div>
                <div class="netflix-card-text m-0 text-white d-flex justify-content-start" >
                  <span style={{paddingRight: '20px', color:'rgba(0, 186, 0)',fontSize: '10px'}}>Title: {movies.title}</span>  
                </div>
                <div class="netflix-card-text m-0 text-white d-flex justify-content-start" >
                  <span style={{paddingRight: '20px', color:'rgba(0, 186, 0)', fontSize: '10px'}}>Popularity: {movies.popularity}</span>  
                </div>
                <div class="netflix-card-text m-0 text-white d-flex justify-content-start">
                    <span style={{color:'rgba(0, 186, 0)', fontSize: '8px'}}>Overview: {movies.overview}</span>
                </div> 
              </div>            
            </div>
        </div>
    )
}

export default MovieCard