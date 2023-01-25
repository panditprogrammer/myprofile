import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="bg-white">
                <div className="container py-2 d-flex justify-content-between align-items-center">
                    <h6 className='small m-0'>
                        <i className="fa-solid fa-envelope"></i> <a href="mailto:panditprogrammer@gmail.com">panditprogrammer@gmail.com</a>
                    </h6>
                    <h6 className='small m-0'>
                        <i className="fa-solid fa-earth-americas"></i> <a target="blank" href="http://www.panditprogrammer.com">www.panditprogrammer.com</a>
                    </h6>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Coders</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to='/services'>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to='/contact'>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-uppercase" to='/about'>About Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header