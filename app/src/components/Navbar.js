import React from 'react';
import { Link } from "react-router-dom";
const navbar=()=>{
    return(
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey lighten-1">  
            <ul className="right hide-on-med-and-down">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}
export default navbar;