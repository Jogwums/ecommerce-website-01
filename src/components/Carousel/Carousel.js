import React from 'react'

import ItemCards from '../ItemCards/ItemCards'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-5 mx-5 d-flex items-center" data-bs-ride="carousel">
            <div className="carousel-inner text-center">
                <div className="carousel-item d-flex  active w-100">
                    <ItemCards />
                    <ItemCards />
                    
                </div>
                <div className="carousel-item">
                    <ItemCards />
                    <ItemCards />
                </div>
                <div className="carousel-item">
                    <ItemCards />
                    
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
            </div>
        </>
    )
}

export default Carousel
