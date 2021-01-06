import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from '../../../redux/Products/productActions'

//loader 
import loader from '../../../Assets/loaders/loader1.gif'

//styling
import './styles.css'

const Women = ({ productData, fetchProducts }) => {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])


    return (
        productData.loading ? (
            <h2>Loading
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
                                        
                                        <button className="btn btn-primary">
                                            <Link to="/login">Buy</Link>
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
