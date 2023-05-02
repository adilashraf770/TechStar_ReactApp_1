import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <HashLink className="navbar-brand" to="/#home">TechStar</HashLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse m" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <HashLink className="nav-link active" aria-current="page" to="/#home">Home</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#about">About</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink className="nav-link" to="/#brands">Brands</HashLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar