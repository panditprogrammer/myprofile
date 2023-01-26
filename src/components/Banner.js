import React from 'react'

const Banner = () => {
    return (
        <main className="container">

            <div className='row card-pp g-4 my-4'>
                <div className="col-md-6 col-sm-12">
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img src="https://avatars.githubusercontent.com/u/65272533" className='object-fit-contain rounded-circle p-lg-1 p-md-2 p-sm-4' height="280px" alt="" />

                        <h1 className='h3 text-primary text-uppercase'>Chandan Prajapati</h1>

                        <h2 className='h5'>MERN Stack Developer</h2>
                        <h5><i className="fa-solid fa-location-dot"></i> <a href="https://goo.gl/maps/89n7Eg2geGeo4RX68" target="blank">Ara,India</a></h5>
                    </div>

                    <div className="w-50 mx-auto my-1 d-flex justify-content-around align-items-center">

                        <div className='bg-primary rounded-circle icon'>
                            <a target="blank" href="http://github.com/panditprogrammer" className='text-white'><i className="fa-brands fa-github"></i></a>
                        </div>
                        <div className='bg-primary rounded-circle icon'>
                            <a target="blank" href="http://facebook.com/panditprogrammer" className='text-white'><i className="fa-brands fa-facebook"></i></a>
                        </div>
                        <div className='bg-primary rounded-circle icon'>
                            <a target="blank" href="http://twitter.com/panditprogramer" className='text-white'><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className='bg-primary rounded-circle icon'>
                            <a target="blank" href="https://www.linkedin.com/in/panditprogrammer/" className='text-white'><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="row my-4 g-0 text-center">
                        <div className="col">
                            <h6 className='small m-0'>
                                <i className="fa-solid fa-phone"></i> <a href="tel:+918340460297">+91 8340460297</a>
                            </h6>
                        </div>
                        <div className="col">
                            <h6 className='small m-0'>
                                <i className="fa-brands fa-whatsapp"></i> <a href="https://api.whatsapp.com/send/?phone=+918340460297&text=Hello">+91 8340460297</a>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <h1 className="h3 text-uppercase"> &mdash; Who Am I &mdash; </h1>
                    <p>
                        As a MERN Stack Developer, I have a strong understanding of the technologies that make up the MERN stack: MongoDB, Express.js, React.js, and Node.js. I am proficient in using these technologies to develop and maintain web applications.
                    </p>
                    <p>
                        I have experience with MongoDB, a NoSQL database, and can design and implement efficient data models that can handle large amounts of data. I am also familiar with Mongoose, an Object Document Mapper (ODM) that allows for easy interaction with MongoDB.
                    </p>
                    <p>
                        I am well-versed in Express.js, a web application framework for Node.js. I can create routes and handle HTTP requests and responses, and I am experienced in using middleware to handle authentication and authorization.
                    </p>
                </div>
            </div>

        </main >
    )
}

export default Banner