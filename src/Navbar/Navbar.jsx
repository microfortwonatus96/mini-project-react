import { useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../Navbar/nav-css.css';

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
    return (
    <>
    <div>
        <nav class="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right bg-dark">
            <div class="container-fluid">
                {/* left */}
                <section class="left d-flex align-items-center">
                    {/* <a class="navbar-brand" href="#">Navbar</a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <Link to="/" class="nav-link  text-style-nav">Home</Link>                      
                            </li>
                            <li class="nav-item">
                                <Link to="/list" class="nav-link  text-style-nav">List</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                 {/* left-end */}
                
                {/* right */}
                <section class="right">
                    <li class="nav-item d-flex align-items-center" style={{cursor: 'pointer'}}>
                        <a class="nav-link text-style-nav" style={{listStyle: 'none'}}>{renderLoginLogout()}</a>
                    </li>
                </section>
                {/* right-end */}
            </div>
        </nav>
    </div>
    </>
    )
}

export default Navbar;