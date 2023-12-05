import React, { useEffect } from 'react'
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/auth/action';
const Navbar = () => {
const navigate=useNavigate();


const auth=JSON.parse(localStorage.getItem("userDetail"))
// console.log(auth);
const handleNavigate=()=>{
  navigate("/dasboard")
}
const handlelogOut=()=>{
  localStorage.removeItem("userDetail")
  navigate('/')
}
  return (
    <div className="navbar-wrapper">
      <h1 onClick={handleNavigate}>Revly io</h1>
      <div className="navbar-link-menu">
        <Link to="/session">Ongoing sessions</Link>
        <Link to="/history">Doubt history</Link>
        <Link to="/request">Doubt creation</Link>
        
        <button onClick={handlelogOut}>{auth.user}<span>logout</span> </button>
      </div>
    </div>
  );
}

export default Navbar
