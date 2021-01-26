import React from 'react'
import { Link } from 'react-router-dom'
// import shopMen from '../../Assets/images/Dir1.jpg'
// import shopWomen from '../../Assets/images/Dir2.jpg'

import './styles.css'

const Details = ({shop, name, link}) => {
    return (
        <div className="slider">
            <div className="slider-wrap">
                <div className="slider-item"
                style={{
                    backgroundImage: `url(${shop})`
                }}>
                    <Link to={`/${link}`} className="btn btn-primary">{name}</Link>
                </div>
            </div>
        </div>
    )
}

export default Details;
