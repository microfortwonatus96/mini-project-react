import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import List from './List/List';
import Home from './Home/Home';
import MovieList from './List/detailMovieList';
import Form from './Form/Login';
// import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>  
      <Routes>
        <Route exact path='/' element={<Home/>} /> 
        <Route path='/list' element={<List/>} />
        <Route path='/detailMovieList/:id' element={<MovieList/>} />
        <Route path='/login' element={<Form/>} />
      </Routes>
    </Router>
  );
}

export default App;

// return (
//   <Router>  
//     <Routes>
//       <Route exact path='/'>
//         <Home />
//       </Route>
//       <Route exact path='/list'>
//         <List />
//       </Route>
//       <Route exact path='/detailMovieList/:id'>
//         <MovieList />
//       </Route>
//       <Route exact path='/login'>
//         <Form />
//       </Route>
//      </Routes>
//   </Router>
// );