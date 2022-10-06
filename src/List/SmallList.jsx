import React from 'react'
import '../List/List.css'
import axios from 'axios'

const SmallList = ({list, getData}) => {

    const handleDelete = (id) => {
        if (window.confirm('are you sure you want to delete?')) {
            // kalo user klik ok
            axios({
            method: 'delete',
            url: `https://api.themoviedb.org/3/list/${id}?api_key=1e312b8618d863a571b3baecaa0bbce0&session_id=a4a2f0945bb66531c2694cf04f85b1cd278df92b`,
            }).then((response) => {
                console.log("cek:", response)
                // window.location.reload()
                // window.location.href = '/list'
                console.log("cek:", getData())
            }).catch((error) => {
                console.error(error)
            })
        }   
 
}
    return (
        <div>
            <div className="box-list bg-list">
                <div>
                    <p class="text-list">{list.name}</p>
                    {/* <p class="text-list">Desc: {list.description}</p> */}
                </div>
                <div>
                    <a href="#"  className="btn btn-danger" onClick={() => handleDelete(list.id)}>Delete</a>
                </div>
            </div>
        </div>
    )
}

export default SmallList