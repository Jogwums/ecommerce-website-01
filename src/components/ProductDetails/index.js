import React, {useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'

import {fetchProduct, setProduct } from '../../redux/Products/productActions' 
import { addProduct } from '../../redux/Cart/cartActions'

//import handle add to cart
import { useRef } from 'react-redux'

const mapState = (state) => ({
    productSingle: state.products.product,
    cartDataAll: state.cartData
})

const ProductDetails = (props) => {
    const { productSingle, cartDataAll } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(['ProductDets:',productSingle])
    
    

    const {
        id,
        name,
        images,
        desc,
        description,
        price,
    } = productSingle; 

    const handleAddToCart = async (productData) => {
        if(!productData){}
        await dispatch(
            addProduct({...productData, ...cartDataAll}),
            history.push('/cart')
        )
    } 
    

    return (
        <div class="flex flex-col sm:flex-row mt-3">
        <div class="flex-auto w-2/3 sm:w-52 my-0 mx-auto">
            <img src={images} alt={desc} class=" inset-0 w-full h-full object-cover" />
        </div>
        <form class="flex-auto p-6 w-2/3 mx-auto">
        <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">
            {name}
        </h1>
        <div class="text-xl font-semibold text-gray-500">
         {`\u20A6`}{price}
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
            In stock
        </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6">
        <div class="space-x-2 flex">
            <label>
            <input class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked />
            XS
            </label>
            <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="s" />
            S
            </label>
            <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="m" />
            M
            </label>
            <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="l"/>
            L
            </label>
            <label>
            <input class="w-9 h-9 flex items-center justify-center" name="size" type="radio" value="xl"/>
            XL
            </label>
        </div>
        <div class="ml-auto text-sm text-gray-500 underline">Size Guide</div>
        </div>
        <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-1 flex space-x-3">
            <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" 
                    type="button"
                    onClick={() => handleAddToCart(productSingle) }>
                Buy now
            </button>
            <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" 
                    type="button"
                     onClick={() => handleAddToCart(productSingle)}>Add to Cart</button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300 focus:text-red-400" type="button" aria-label="like">
            <svg width="20" height="20" fill="currentColor" onFocus="">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
        </button>
        </div>
        <p class="text-sm text-gray-500">
        <small>Free shipping on all locally made items</small>
        </p>
    </form>
    </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setProduct: () => dispatch(setProduct())
    }
}

export default connect(mapState, mapDispatchToProps)(ProductDetails)
