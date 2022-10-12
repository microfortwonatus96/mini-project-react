// import React from 'react'
// import '../List/List.css'
// import axios from 'axios'
// import { Link } from 'react-router-dom';
// import { API_KEY } from "../Form/Api_Key";
// import { URL_TMDB } from "../Form/Api_Key";
// import { SESSION_ID } from '../Form/Api_Key';

// const SmallList = ({list}) => {
   
//     const handleDelete = (id) => {
//         if (window.confirm('are you sure you want to delete?')) {
//             axios({
//             method: 'delete',
//             url: `${URL_TMDB}/list/${id}?api_key=${API_KEY}&session_id=${SESSION_ID}`,
//             }).then((response) => {
//                 console.log("cek:", response)
//                 window.location.reload()
//             }).catch((error) => {
//                 console.error(error)
//             })
//         }   
 
//     }

    
//     return (
//         <div>
//             <div className="box-list bg-list gap-3" >
//                 <div key={list.id}>
//                     <Link to={`/detailMovieList/${list.id}`} class=" text-list">{list.name}</Link>
//                 </div>
//                 <div>
//                     <p class="text-items">{list.item_count} items</p>
//                 </div>
        
//                 <div className="d-block">
//                     <a className="btn btn-danger" onClick={() => handleDelete(list.id)}>Delete</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SmallList