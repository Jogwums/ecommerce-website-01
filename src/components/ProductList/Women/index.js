import React, {useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
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
    const history = useHistory();
    
    

    const handleAddToCart = async (productData) => {
        if(!productData){}
        await dispatch(
            addProduct({...productData, ...cartDataAll}),
            history.push('/cart')
        )
    }   
    
    const handleMoreDetails = async (cartDataAll) => {
        if(!cartDataAll) {};
        await dispatch(
            fetchProduct(cartDataAll),
            history.push('/product/:${product.id}')
        )
    }

    return (
        productData.loading ? (
            <h2 className="text-center flex items-center py-0 px-0 ">
                <img src={loader} alt="loader" width="50" height="50" />
            </h2>
            
        ) : productData.error ? (
            <h2 className="text-center">{productData.error}</h2>
        ) : (
            <div>
                <div className="card">
                    {
                        productData && 
                            productData.products && 
                                productData.products.map(product => <> 
                                   <div className="products-wrapper">
                                     <div className="card-content">
                                        
                                        <div className="card-image-wrapper">
                                            <img className="card-image" src={product.images} alt={product.id} />
                                        </div>
                                        
                                        <div className="details">
                                            <h2 className="card-title" key={product.id}>{product.name}</h2>
                                            <p className="card-price">{`\u20A6`}{product.price}</p>
                                            <h4>Product ID: {product.id}</h4>
                                        </div>
                                        
                                        <span className="btn_group">
                                            <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                                                Add To Cart
                                            </button>
                                            <button className="btn btn-secondary small" onClick={() => handleMoreDetails(product.id)}>
                                                More Details
                                            </button>
                                        </span>
                                        <span className="card-footer">
                                            <small>Free shipping on all locally made items</small>
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
