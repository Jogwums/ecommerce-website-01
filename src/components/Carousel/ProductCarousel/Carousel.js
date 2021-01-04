import React from 'react'
import CarouselDetails from '../CarouselDetails'


//images
import item1 from '../../../Assets/images/Dir3.jpg'
import item2 from '../../../Assets/images/siteBg2.jpg'
import item3 from '../../../Assets/images/siteBg3.jpg'
import item4 from '../../../Assets/images/suitcases.jpg'

import '../styles.css'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-0 mx-0 d-flex items-center" data-bs-ride="carousel">
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    <CarouselDetails shop={item1} name="Buy Winter Wear" />
                </div>
                <div className="carousel-item">
                    <CarouselDetails shop={item2} name="Buy Clothes" />
                </div>
                <div className="carousel-item">
                    <CarouselDetails shop={item3} name="Buy Electronics" />
                </div>
                <div className="carousel-item">
                    <CarouselDetails shop={item4} name="Buy Travel Gear" link='login' />
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
