import axios from 'axios'
import { useEffect, useState } from 'react'

function List() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    // const [nameEdit, setNameEdit] = useState('')
    // const [descriptionEdit, setDescriptionEdit] = useState('')


  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const handleDescription = (event) => {
    console.log(event.target.value)
    setDescription(event.target.value)
  }


//   const handleNameEdit = (event) => {
//     console.log(event.target.value)
//     setNameEdit(event.target.value)
//   }
//   const handleDescriptionEdit = (event) => {
//     console.log(event.target.value)
//     setDescriptionEdit(event.target.value)
//   }
//   const handleLanguageEdit = (event) => {
//     console.log(event.target.value)
//     setLanguageEdit(event.target.value)
//   }

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
//   const handleEdit = (id) => {
//     if (window.confirm('are you sure you want to edit?')) {
//       axios({
//         method: 'put',
//         url: `http://localhost:7777/product/${id}`,
//         data: {
//           name: nameEdit,
//           description: descriptionEdit,
//           price: priceEdit,
//         }
//       }).then((response) => {
//         console.log(response)
//         window.location.reload()
//       }).catch((error) => {
//         console.error(error)
//       })
//     }
//   }
//   const handleDelete = (id) => {
//     if (window.confirm('are you sure you want to delete?')) {
//       // kalo user klik ok
//       axios({
//         method: 'post',
//         url: `http://localhost:7777/product/delete/${id}`,
//       }).then((response) => {
//         console.log(response)
//         window.location.reload()
//       }).catch((error) => {
//         console.error(error)
//       })
//     }
//   }
  useEffect(() => {
    // Promise
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/account/{account_id}/lists?api_key=1e312b8618d863a571b3baecaa0bbce0&language=en-US&page=1&session_id=f4f70c78298c31c2b8ef605b8879c200d9d90a1a',
    })
      .then(function (response) {
        console.log(response)
        setList(response.data.results)
      })
      .catch(function (error) {
        console.error(error)
        alert('ada error, coba reload halaman')
      })
  }, [])
  return (
    <div className="App">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputName" className="form-label">Name</label>
          <input value={name} onChange={handleName} type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label for="inputDescription" className="form-label">description</label>
          <input value={description} onChange={handleDescription} type="text" className="form-control" id="inputDescription" />
        </div>
     
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create List</button>
        </div>
      </form>

      {list.map((item) => {
        console.log(item)
        return <div>
          <div className="card" style={{ width: '18rem',  margin: '20px' }}>
            <div className="card-body">
              {/* <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6>  */}
              <p className="card-text">List Name: {item.name} </p>
              <p className="card-text">Desc: {item.description} </p>
              {/* <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a> */}
              {/* <a href="#" className="card-link" onClick={() => handleDelete(item.id)}>Delete</a> */}
            </div>
          </div>
          {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Product {item.id}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="row g-3" onSubmit={() => handleEdit(item.id)}>
                    <div className="col-md-6">
                      <label for="inputName" className="form-label">Name</label>
                      <input value={nameEdit} onChange={handleNameEdit} type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputDescription" className="form-label">description</label>
                      <input value={descriptionEdit} onChange={handleDescriptionEdit} type="text" className="form-control" id="inputDescription" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputPrice" className="form-label">Price</label>
                      <input value={priceEdit} onChange={handlePriceEdit} type="number" className="form-control" id="inputPrice" />
                    </div>
                 
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      })}
    </div >
  );
}

export default List;
