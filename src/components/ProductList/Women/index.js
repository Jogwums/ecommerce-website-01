import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts, fetchProduct } from '../../../redux/Products/productActions'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/Cart/cartActions'

//loader 
import loader from '../../../Assets/loaders/loader1.gif'

//styling
import './styles.css'



const Women = (props) => {
    const { productData, fetchProducts, cartDataAll } = props;
   const { id } = productData;
   const { productID } = useParams(id);
    
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const dispatch = useDispatch();

    
    

    const handleAddToCart = async (productData) => {
        if(!productData){}
        await dispatch(
            addProduct({...productData, ...cartDataAll}),
        )
    }   
    
    const handleMoreDetails = async (cartDataAll) => {
        if(!cartDataAll) {};
        await dispatch(
            fetchProduct({productID})
        )
    }

    return (
        productData.loading ? (
            <h2 className="text-center">Loading
                <img src={loader} alt="loader" width="50" height="50" />
            </h2>
            
        ) : productData.error ? (
            <h2>{productData.error}</h2>
        ) : (
            <div>
                <div className="card">
                    {
                        productData && 
                            productData.products && 
                                productData.products.map(product => <> 
                                   <div className="products-wrapper">
                                     <div className="card-content">
                                        
                                        <span className="card-image-wrapper">
                                            <img className="card-image" src={product.images} alt={product.id} />
                                        </span>
                                        
                                        <div className=" details">
                                            <h2 className="card-title" key={product.id}>{product.name}</h2>
                                            <p className="card-price">{`\u20A6`}{product.price}</p>
                                        </div>
                                        
                                        <span className="btn_group">
                                            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                                                Add To Cart
                                            </button>
                                            <button className="btn btn-secondary small" onClick={() => handleMoreDetails()}>
                                                More Details
                                            </button>
                                        </span>
                                        
                                    </div>
                                   </div>
                                </>)
                    }
                </div>
            </div>
        )
    )
}

const mapStateToProps = (state) => {
    return {
        productData: state.products,
        cartDataAll: state.cartData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Women)
