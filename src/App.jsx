import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import List from './List/List';
import Home from './Home/Home';
import MovieList from './List/MovieList';
import Form from './Form/Login';
// import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<List/>} />
        <Route path='/MovieList' element={<MovieList/>} />
        <Route path='/login' element={<Form/>} />
      </Routes>
    </Router>
  );
}

export default App;
