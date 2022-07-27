import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">HOME</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/AboutUs">ABOUT US</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/BookAnExperience">BOOK AN EXPERIENCE</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/ContactUs">CONTACT US</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/Cart">CART</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}