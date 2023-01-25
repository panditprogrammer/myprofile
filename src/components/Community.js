import React from 'react'
import community from "../api/community"

const Community = () => {
    return (
        <main className="container">
            <div className="row my-4 g-2">
                <h1 className='h3 text-center text-uppercase my-4'> &mdash; Our Community &mdash;</h1>
                {
                    community.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="card-pp d-flex justify-content-center flex-column align-items-center shadow-sm">
                                    <img className='rounded-circle' src={item.image} width="120px" alt="partner" />
                                    <h5 className="h5 py-1 text-primary">{item.name}</h5>
                                    <p> {item.desc.substring(0,160)} </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </main>
    )
}

export default Community