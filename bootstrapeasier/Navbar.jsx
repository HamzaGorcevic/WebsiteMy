
import {Link} from 'react-router-dom'


function Navbar() {

   
    return (
        <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
            <div className="container-fluid py-2" style={{display:'flex',justifyContent:'space-between'}}>
                
                <a href="#" className="navbar-brand" >
                    Hamza
                    <span className="text-warning" style={{position:'relative',bottom:'1px'}}><i className="bi bi-person"></i></span>
                    </a>

                <button className="navbar-toggler" type="button" data-toggle ='collapse' data-target ="#NavShort">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="NavShort" style={{flexGrow:'0'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#anime-page" className="nav-link">
                                My anime
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <div href="#" className="nav-link">
                            <Link style={{textDecoration:'none',color:'white'}} to={'/login'}>Login</Link>
                                
                            </div>
                        </li>
                        <li className="nav-item">
                            <div href="#" Link={'/register'} className="nav-link btn btn-warning" style={{width:100}} type="button">
                            <Link style={{textDecoration:'none',color:'white'}} to={'/register'}>Sign up</Link>
                            </div>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;