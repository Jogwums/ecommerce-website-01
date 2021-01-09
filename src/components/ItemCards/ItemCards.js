import React from 'react'
// import img1 from '../../Assets/images/svg-1.svg'
// import img2 from '../../Assets/images/svg-2.svg'

const ItemCards = ({name, img, desc, rating, price, handleAddToCart}) => {
    return (
        <>
        <div className="card" style={{"width": "35rem", "marginLeft":"5px"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Rating: {rating} </li>
                <li className="list-group-item">Price: {price} </li>
            </ul>
            <div className="card-body">
                <button href="/" className="btn btn-primary card-link">More Details</button>
                <button className="btn btn-danger card-link" onClick={() => handleAddToCart()}>Add To Cart</button>
            </div>
        </div>
        </>
    )
}

export default ItemCards
