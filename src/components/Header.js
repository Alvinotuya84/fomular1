import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/f1.jpg';
function NavBar(){

    return(
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            
      <img src={logo} alt="F1" width="80" height="40" />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">NEWS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/drivers">DRIVERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">TEAMS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">PHOTOS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">RESULT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">CALENDER</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">TEST SESSIONS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">SEARCH</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacts">TICKETS</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar