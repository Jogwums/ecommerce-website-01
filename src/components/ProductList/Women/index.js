import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from '../../../redux/Products/productActions'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/Cart/cartActions'

//loader 
import loader from '../../../Assets/loaders/loader1.gif'

//styling
import './styles.css'



const Women = (props) => {
    const { productData } = props;
    const { fetchProducts } = props;
    
    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const dispatch = useDispatch();

    


    const handleAddToCart = async (productData) => {

        console.log('adding to cart');
        if(!productData){
            console.log('waiting for productData');
        }
        
        await dispatch(
            addProduct({...productData})
        )
        console.log('added to cart');
        
        
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
                                        <h2 className="card-title" key={product.id}>{product.description}</h2>
                                        
                                        <span className="card-image-wrapper">
                                            <img className="card-image" src={product.images} alt={product.id} />
                                            <p className="card-price">Price: {`\u20A6`}{product.price}</p>
                                        </span>
                                        
                                        <button className="btn btn-primary" onClick={() => handleAddToCart()}>
                                            Add To Cart
                                        </button>
                                        
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
        productData: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Women)
