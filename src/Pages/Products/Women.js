import React from 'react';
import { connect } from 'react-redux'
import {Women} from '../../components/index'
import { addProduct } from '../../redux/Cart/cartActions'

const WomensProducts = () => {
    return (
        <div>
            <Women />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        cartData: state.cartData
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        cartData: () => dispatch(addProduct)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WomensProducts)
