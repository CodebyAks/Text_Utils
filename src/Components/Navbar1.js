import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==="dark"?"dark":"success"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/formarea">{props.raja}</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/about">
            About
          </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown mx-3 ">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Theme
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Black</a></li>
                  <li><a className="dropdown-item" href="#">Tomato</a></li>
                  <li><a className="dropdown-item" href="#">success</a></li>
                  <li><a className="dropdown-item" href="#">cadetblue</a></li>
                </ul>
              </li>

            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button> */}
            {/* </form> */}

            <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglebutton} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  raja: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: "kuch rkho yha p",
  raja: "aaja raja"
}