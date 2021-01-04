import React from 'react'
import CarouselDetails from './CarouselDetails'
// import ItemCards from '../ItemCards/ItemCards'

//images
import shopMen from '../../Assets/images/Dir1.jpg'
import shopWomen from '../../Assets/images/Dir2.jpg'

import './styles.css'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-0 mx-0 d-flex items-center" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    <CarouselDetails shop={shopMen} name="Shop Men" link="men"/>
                </div>
                <div className="carousel-item">
                    <CarouselDetails shop={shopWomen} name="Shop Women" link="women" />
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
