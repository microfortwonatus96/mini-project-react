import axios from 'axios'
import { useEffect, useState } from 'react'

const Home = () => {
    // const [id, setId] = useState('')
    // const [title, setTitle] = useState('')
    const [movies, setGetMovie] = useState([])

    useEffect(() => {
        // Promise
        axios({
          method: 'get',
          url: 'https://api.themoviedb.org/3/movie/popular?api_key=1e312b8618d863a571b3baecaa0bbce0&language=en-US&page=1',
        })
          .then(function (response) {
            console.log(response)
            setGetMovie(response.data.results)
          })
          .catch(function (error) {
            console.error(error)
            alert('ada error, coba reload halaman')
          })
      }, [])

      return(
        <div  style={{display: 'flex'}}>
            {movies.map((item) => {
                console.log(item)
                return <div className="col-">
                    <div className="card row m-2" style={{ width: '18rem'}}>
                        <div className="card-body ">
                        <p className="card-text">Movie id: {item.id} </p>
                        <p className="card-text">Title: {item.title} </p>
                        <p className="card-text">popularity: {item.popularity} </p>
                        <p className="card-text">overview: {item.overview} </p>
                        {item.poster_path ? (
                          <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="poster" />
                        ) : (
                          <div className="filler-poster"></div>
                        )}
                        </div>
                    </div>
                </div>
            })}
        </div>
      )
}

export default Home;