import React from 'react'
import { Link } from 'react-router-dom'
import shopMen from '../../Assets/images/Dir1.jpg'
import shopWomen from '../../Assets/images/Dir2.jpg'

import './styles.css'

const Directory = (props) => {
    return (
        <div className="directory">
            <div className="wrap">
            <div className="item"
            style={{
                backgroundImage: `url(${shopMen})`
            }}>
                <a href="/" className="btn btn-primary">Shop Men</a>
            </div>
            <div
            className="item"
            style={{
                backgroundImage: `url(${shopWomen})`
            }}>
            
                <Link to="/" className="btn btn-primary">Shop Women</Link>
            
            </div>
            </div>
        </div>
    )
}

export default Directory
