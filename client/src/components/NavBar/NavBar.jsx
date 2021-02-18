import React from 'react';
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo">
      GreenWork
    </Link>
    
    <ul id="nav-mobile" className="right hide-on-med-and-down">

      <li>
          <NavLink to="/about" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          > 
              About
              </NavLink>
          </li>
      <li>
      <NavLink to="/contact" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Contact Us
              </NavLink>
          </li>
          <li>
      <NavLink to="/logIn" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Log In
              </NavLink>
          </li>
          <li>
      <NavLink to="/newPlants" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              New Plants
              </NavLink>
          </li>
          <li>
      <NavLink to="/addToGarden" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Add Plants
              </NavLink>
          </li>
          <li>
      <NavLink to="/startGarden" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Start Your Garden
              </NavLink>
          </li>
          <li>
      <NavLink to="/myGarden" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              My Garden
              </NavLink>
          </li>
          <li>
      <NavLink to="/signIn" 
          activeStyle={{backgroundColor: "rgb(254, 247, 224)"}}
          >
              Sign In
              </NavLink>
          </li>
    </ul>
  </div>
</nav>
    );
};

export default NavBar;