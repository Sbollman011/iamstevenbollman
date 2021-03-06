import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {

  render() {
      return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">Steven Bollman</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <a className="nav-link" href="#">Projects<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Technologies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
        );
    }
}

export default NavBar;