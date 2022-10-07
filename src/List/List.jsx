import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SmallList from './SmallList'
import Footer from '../Footer/Footer'

const List = () => {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'https://api.themoviedb.org/3/list?api_key=1e312b8618d863a571b3baecaa0bbce0&session_id=8a186f980a12700da3976cf898f8e8930e124302',
      data: {
        name: name,
        description: description,
      }
    }).then((response) => {
      console.log('cek:',response)
      window.location.reload()
    }).catch((error) => {
      console.error(error)
    })
  }
  const getData = () =>{
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/account/{account_id}/lists?api_key=1e312b8618d863a571b3baecaa0bbce0&language=en-US&page=1&session_id=a4a2f0945bb66531c2694cf04f85b1cd278df92b',
    })
      .then(function (response) {
        console.log(response)
        setList(response.data.results)
      })
      .catch(function (error) {
        console.error(error)
        alert('ada error, coba reload halaman')
      })
  }
  useEffect(() => {
    // Promise
    getData()
  }, [list])

  return (
    <>
    <div>
      <div style={{ margin: 'auto'}}>
        <Navbar/>
      </div>

      {/* modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header modal-border-bottom">
                  <h5 className="modal-title" id="exampleModalLabel">Create List</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="g-3" onSubmit={handleSubmit}>
                    <div className="col-md-12">
                      <label for="inputName" className="form-label">Name</label>
                      <input value={name} onChange={handleName} type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="col-12 mt-3">
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </div>
      {/* end-modal */}
  
      <div className="container">
        <div className="box-title">
            <div>
              <p className="title-list">My List</p>
            </div>
            <div>
              <button className="btn btn-primary create-list" data-bs-toggle="modal" data-bs-target="#exampleModal">Create List</button>
            </div>
        </div>
        <div className="grid-list">
          {list && list.map((lists) => <SmallList list={lists} />)}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>

    </>
  );

}

export default List;
