import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../Navbar/nav-css.css';

const Navbar = () => {
    const renderLoginLogout = () => {
        if(localStorage.getItem('sessionID')){
            const handleLogout = () => {
                localStorage.removeItem('sessionID');
                window.location.href = '/login'
            }
            return <li className="nav-item" onClick={handleLogout}>Logout</li>
        }
        return <li className="nav-link"><Link to="/login">Login</Link></li>
    }
    useEffect(() => {
       if(!localStorage.getItem("sessionID")){
        window.location.href = '/login'
       } 
    },[])
    return <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/"><a class="nav-link active" aria-current="page" href="#">Home</a></Link>                      
                    </li>
                    <li class="nav-item">
                        <Link to="/list"><a class="nav-link active" aria-current="page" href="#">List</a></Link>
                    </li>
                    <li class="nav-item" style={{cursor: 'pointer'}}>
                        {renderLoginLogout()}
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;