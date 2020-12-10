import React from 'react'
import img1 from '../../Assets/images/svg-1.svg'
import img2 from '../../Assets/images/svg-2.svg'

const ItemCards = ({img}) => {
    return (
        <>
        <div className="card" style={{"width": "35rem"}}>
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Product</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: </li>
                <li className="list-group-item">Price: </li>
            </ul>
            <div className="card-body">
                <a href="/" className="btn btn-primary card-link">More Details</a>
                <a href="/" className="btn btn-danger card-link">Buy Now</a>
            </div>
        </div>
        </>
    )
}

export default ItemCards
