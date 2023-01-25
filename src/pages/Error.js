import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Error = () => {
    return (
        <>
            <Header></Header>
            <div className="container my-4 card-pp ">
                <div className='row vh-100 d-flex flex-column justify-content-center align-items-center'>
                    <div className="text-center col-md-6 col-sm-12">
                        <h1 className='text-primary text-uppercase py-2'>Page Not Found!</h1>
                        <p>The page you are looking for is not available or moved parmanently to another locations.</p>
                        <h2 className='py-2'>404</h2>
                        <p className='py-2'><Link to="/" className="btn btn-sm btn-primary">Back To Home</Link></p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Error