import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'

import {fetchProduct, setProduct } from '../../redux/Products/productActions' 
import { addProduct } from '../../redux/Cart/cartActions'


const mapState = (state) => ({
    productSingle: state.product

})

const ProductDetails = (props) => {
    const { productSingle } = useSelector(mapState);
    // const dispatch = useDispatch();

    console.log(productSingle)
    
    

    const {
        id,
        name,
        images,
        desc,
        description,
        price,
    } = props; 



    return (
        <div className="product-page">
            <div className="image-wrapper">
                <img src={images} alt="images"/>
            </div>
            <div className="card-content details">
                <ul>
                    <li>
                        <h1>{`name`}</h1>
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

const mapDispatchToProps = dispatch => {
    return {
        setProduct: () => dispatch(setProduct())
    }
}

export default connect(mapState, mapDispatchToProps)(ProductDetails)
