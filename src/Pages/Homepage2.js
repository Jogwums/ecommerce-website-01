import React from 'react'

import Carousel from '../components/Carousel/ProductCarousel/Carousel'
import Directory from '../components/Directory/Directory'

const Homepage2 = () => {
    return (
        <div className="home" style={homeGrid}>
            <div className="home-wrap" style={home}>
                <Carousel />
            </div>
            <div className="home-wrap">
                <Carousel />
            </div>
            <div className="home-wrap">
                <Carousel />
            </div>
        </div>
    )
}

const home = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    maxHeight: '40vh',
}

const homeGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem',
}


export default Homepage2;
