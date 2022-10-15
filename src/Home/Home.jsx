import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { API_KEY } from "../Form/Api_Key";
import { URL_TMDB } from "../Form/Api_Key";
import Video from "../video/Video";

const Home = () => {
  const [movies, setmovies] = useState();

  useEffect(() => {
    axios
      .get(
        `${URL_TMDB}/movie/popular?api_key=${API_KEY}&language=en-US`
        // `${URL_TMDB}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(({ data }) => setmovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div >
      <Navbar />
      < Video />
      <div className="container">
        <div className="grid">
          {movies && movies.map((movie) => <MovieCard movies={movie} />)}
        </div> 
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;