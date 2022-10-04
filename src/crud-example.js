import axios from 'axios'
import { useEffect, useState } from 'react'

function List() {
  const [name, setName] = useState('')
  const [product, setProduct] = useState([])
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  // const [create_at, setCreate_at] = useState('')
  const [image, setImage] = useState('')
  

  const [nameEdit, setNameEdit] = useState('')
  const [descriptionEdit, setDescriptionEdit] = useState('')
  const [priceEdit, setPriceEdit] = useState('')


  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const handleDescription = (event) => {
    console.log(event.target.value)
    setDescription(event.target.value)
  }
  const handlePrice = (event) => {
    console.log(event.target.value)
    setPrice(event.target.value)
  }
  // const handleCreateAt = (event) => {
  //   console.log(event.target.value)
  //   setCreate_at(event.target.value)
  // }
  const handleImage = (event) => {
    console.log(event.target.value)
    setImage(event.target.value)
  }

  const handleNameEdit = (event) => {
    console.log(event.target.value)
    setNameEdit(event.target.value)
  }
  const handleDescriptionEdit = (event) => {
    console.log(event.target.value)
    setDescriptionEdit(event.target.value)
  }
  const handlePriceEdit = (event) => {
    console.log(event.target.value)
    setPriceEdit(event.target.value)
  }

  const handleSubmit = () => {
    // console.log(name, age)
    axios({
      method: 'post',
      url: 'http://localhost:7777/product',
      data: {
        name: name,
        description: description,
        // image: image,
        price: price,
        // create_at: create_at,
      }
    }).then((response) => {
      console.log(response)
      window.location.reload()
    }).catch((error) => {
      console.error(error)
    })
  }
  const handleEdit = (id) => {
    if (window.confirm('are you sure you want to edit?')) {
      axios({
        method: 'put',
        url: `http://localhost:7777/product/${id}`,
        data: {
          name: nameEdit,
          description: descriptionEdit,
          price: priceEdit,
        }
      }).then((response) => {
        console.log(response)
        window.location.reload()
      }).catch((error) => {
        console.error(error)
      })
    }
  }
  const handleDelete = (id) => {
    if (window.confirm('are you sure you want to delete?')) {
      // kalo user klik ok
      axios({
        method: 'post',
        url: `http://localhost:7777/product/delete/${id}`,
      }).then((response) => {
        console.log(response)
        window.location.reload()
      }).catch((error) => {
        console.error(error)
      })
    }
  }
  useEffect(() => {
    // Promise
    axios({
      method: 'get',
      url: 'http://localhost:7777/product',
    })
      .then(function (response) {
        console.log(response)
        setProduct(response.data.data)
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
        <div className="col-md-6">
          <label for="inputAge" className="form-label">image</label>
          <input value={image} onChange={handleImage} type="file" className="form-control" id="inputImage" />
        </div>
        <div className="col-md-6">
          <label for="inputPrice" className="form-label">Price</label>
          <input value={price} onChange={handlePrice} type="number" className="form-control" id="inputPrice" />
        </div>
        {/* <div className="col-md-6">
          <label for="inputDate" className="form-label">Date Time</label>
          <input value={create_at} onChange={handleCreateAt} type="date" className="form-control" id="inputDate" />
        </div> */}
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form>
      {product.map((item) => {
        console.log(item)
        return <div>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6>
              <p className="card-text">Product Name: {item.name} </p>
              <p className="card-text">Desc: {item.description} </p>
              <img src={item.image} style={{width: '100px'}}></img>
              <p className="card-text">Rp. {item.price}</p>
              {/* <p className="card-text">Date Time: {item.create_at}</p> */}
              <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
              <a href="#" className="card-link" onClick={() => handleDelete(item.id)}>Delete</a>
            </div>
          </div>
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
          </div>
        </div>
      })}
    </div >
  );
}

export default List;
