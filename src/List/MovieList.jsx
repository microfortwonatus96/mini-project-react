import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../List/List.css'

const MovieList = () => {

const [itemMovie, setItemMovie] = useState([])

// useEffect(() => {
//     // Promise
//     axios({
//     method: 'get',
//     url: 'https://api.themoviedb.org/3/list/${list_id}?api_key=1e312b8618d863a571b3baecaa0bbce0&language=en-US',
//     })
//     .then(function (response) {
//         console.log(response)
//         setItemMovie(response.data.results)
//     })
//     .catch(function (error) {
//         console.error(error)
//         alert('ada error, coba reload halaman')
//     })
// }, [])

  return (
    <>
    <div className="container">
      <div className="bg-movie-list">
        <p>Hello World</p>
      </div>
    </div>
    </>
  )
}

export default MovieList