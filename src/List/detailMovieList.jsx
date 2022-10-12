import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../List/List.css'
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { API_KEY } from "../Form/Api_Key";
import { URL_TMDB } from "../Form/Api_Key";
import { SESSION_ID } from '../Form/Api_Key';

const MovieList = () => {
  const [details, setDetail] = useState([])
  // const [name, setName] = useState('')
  const params  = useParams();

  const handleDelete = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
        axios({
        method: 'post',
        url: `${URL_TMDB}/list/${id}/remove_item?api_key=${API_KEY}&session_id=${SESSION_ID}`,
        }).then((response) => {
            console.log("cek:", response)
            window.location.reload()
        }).catch((error) => {
            console.error(error)
        })
    }   
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `${URL_TMDB}/list/${params.id}?api_key=${API_KEY}&language=en-US`,
      })
      .then((response) => {
          console.log("cek:", response)
          console.log("cek1:", response.data.items)
          setDetail(response.data.items)
         
          // window.location.reload()
      }).catch((error) => {
          console.error(error)
      })
  },[params])

 

  return (
    <>
    <div style={{ margin: 'auto'}}>
        <Navbar/>
    </div>

    <div className='container'>
      <div className='grid-img'>
    {details && details.map((detail) => {
      return (
      <>
      <div className='detail-img' key={detail.id}>
        <p style={{color: '#fff'}}>{detail.id}</p>
        <img src={`https://image.tmdb.org/t/p/w300/${ detail && detail.poster_path}`} alt={`${detail && detail.title} Poster`}/>
        {/* <i class="bi bi-x-lg icon-delete" onClick={() => handleDelete(detail.id)}></i> */}
        <div className="d-block">
          <button className="btn btn-danger f-12" onClick={() => handleDelete(detail.id)}>Delete</button>
        </div>
      </div>
      </>
      )
    })} 
      </div>
    </div>  
    </>
  )
}

export default MovieList