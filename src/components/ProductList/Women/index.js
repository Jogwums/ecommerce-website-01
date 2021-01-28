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
        )       
            history.push(`/productdets`)
        
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
                <div className="card ">
                    {
                        productData && 
                            productData.products && 
                                productData.products.map(product => <> 
                                   {/* <div className="products-wrapper">
                                     <div className="card-content">
                                        
                                        <div className="card-image-wrapper">
                                            <img className="card-image" src={product.images} alt={product.id} />
                                        </div>
                                        
                                        <div className="details">
                                            <h2 className="card-title" key={product.id}>{product.name}</h2>
                                            <p className="card-price">{`\u20A6`}{product.price}</p>
                                            
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
                                   </div> */}
                                   <div class="flex flex-col sm:flex-row ">
        <div class="flex-none w-full sm:w-52 ">
            <img src={product.images} alt={product.id} 
            class=" inset-0 w-full h-full object-cover" />
        </div>
    <form class="flex-auto p-6">
        <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold" 
            key={product.id}>
            {product.name}
        </h1>
        <div class="text-xl font-semibold text-gray-500">
            {`\u20A6`}{product.price}
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
        </div>
        </div>
        <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3">
            <button 
                class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" 
                    type="submit"
                    onClick={() => handleAddToCart(product)}>
                    Buy now
             </button>
            <button 
                class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" 
                    type="button"
                    onClick={() => handleMoreDetails(product.id)}
                     >More details
            </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
            <svg width="20" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
        </button>
        </div>
        <p class="text-sm text-gray-500">
            <small>Free shipping on all locally made items</small>
        </p>
    </form>
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
