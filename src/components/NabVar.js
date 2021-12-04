import React from "react";
import { isAuth } from '../Main.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'


function Navbar() {
  const history = useHistory();
  const Logout = () => {
    Cookies.remove('token')
    Cookies.remove('user')
    Cookies.remove('id')
    history.push('/')
    window.location.reload();
  }

 const isAdmin = () => {
  const role =Cookies.get('role')
  console.log(role)
  if (role === '1' ) {
    return true
  }
  return false
 }
  return (
    <div className="main_banner sticky-top">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js bg-info">
        <Link className="navbar-brand text-white font-weight-bold text-uppercase" to="/">
          Feature board
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {isAuth() ? (
            <div className="navbar-nav" style={{marginLeft: isAdmin() ? "80%" : "90%"}}>
              { isAdmin() ? (
                <Link to="/admin" className="nav-item nav-link text-light font-weight-bold text-uppercase">Admin</Link>   
                ) : (
                  ''
              )}
              <Link className="nav-item nav-link"><button className="btn text-danger" onClick={Logout}>Logout</button></Link>
            </div>
          ) : (
            <div className="navbar-nav" style={{marginLeft: "80%"}}>
              <Link to="/login" className="nav-item nav-link text-warning">Login</Link>
              <Link to="/register" className="nav-item nav-link text-warning">Register</Link>
            </div>
          )}
        </div>
      </nav>
    
    </div>
    
  );
}

export default Navbar;
