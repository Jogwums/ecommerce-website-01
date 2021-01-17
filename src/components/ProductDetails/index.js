import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {fetchProduct } from '../../redux/Products/productActions' 
import { addProduct } from '../../redux/Cart/cartActions'


const mapState = (state) => ({
    product: state.products

})

const ProductDetails = ({}) => {
    const { product } = useSelector(mapState);
    const dispatch = useDispatch();
    const { productID } = useParams();
    
    
    console.log(product)

    const {
        productID: id,
        name,
        images,
        desc,
        description,
        price,
    } = product; 

    useEffect(() => {
        dispatch(
            fetchProduct(productID)
        )
    }, [])

    return (
        <div className="product-page">
            <div className="image-wrapper">
                <img src={images} alt="images"/>
            </div>
            <div className="card-content details">
                <ul>
                    <li>
                        <h1>{name}</h1>
                    </li>
                    <li>
                        <span>{price}</span>
                    </li>
                    <li>
                        <div>
                            <button className="btn btn-primary">
                                Add to Cart 
                            </button>
                        </div>
                    </li>
                    <li>
                        <span className="desc" 
                            dangerouslySetInnerHTML={{__html: desc}}>

                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails
