import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  const [movies, setmovies] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1e312b8618d863a571b3baecaa0bbce0&language=en-US&page=1`
      )
      .then(({ data }) => setmovies(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div >
      <Navbar />
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