import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../Assets/images/profile-1.jpg'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logoImg} alt="Logo" width="40" height="40"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/registration">Sign-up</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex justify-content-between">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar
