import React from 'react'
import '../List/List.css'

import axios from 'axios'

const SmallList = ({list}) => {

const handleDelete = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
        // kalo user klik ok
        axios({
        method: 'delete',
        url: `https://api.themoviedb.org/3/list/${id}?api_key=1e312b8618d863a571b3baecaa0bbce0&session_id=a4a2f0945bb66531c2694cf04f85b1cd278df92b`,
        }).then((response) => {
            console.log(response)
            window.location.reload()
            // window.location.href = '/list'
        }).catch((error) => {
            console.error(error)
        })
    }   
}
    return (
        <div className="box-list">
            <p class="netflix-card-text m-0" style={{color:'rgba(0, 186, 0)'}}>Name: {list.name}</p>
            <p class="netflix-card-text m-0" style={{color:'rgba(0, 186, 0)'}}>Desc: {list.description}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(list.id)}>Delete</button>
        </div>
    )
}

export default SmallList