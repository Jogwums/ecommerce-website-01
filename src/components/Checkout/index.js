import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/Cart/cartSelectors'
import { createStructuredSelector } from 'reselect'


import './styles.css';
import { Link } from 'react-router-dom';

import { Button } from '../../globalStyles'

import Item from './Item'

const mapState = createStructuredSelector({
    cartItems: selectCartItems
})


const Checkout = () => {
    const { cartItems } = useSelector(mapState)
    const dispatch = useDispatch();

    const errorMsg = 'No Items  to Display';


    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <div className="cart">
                { cartItems.length > 0 ? (
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                           <table className="checkout-header" border="0" cellPadding="0" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th id="del">Remove</th>
                                </tr>
                            </tbody>
                        </table>
                        </tr>
                        <tr>
                            <table className="main-table" border="0" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    {cartItems.map((item, pos) => {
                                        return (
                                            <Item item={item} pos={pos} />
                                        )
                                      })
                                    }
                                </tbody>
                            </table>
                        </tr>
                        <tr>
                            <table className="total-cart" border="0" cellPadding="0" cellSpacing="0" >
                                <tr align="left">
                                    <td>
                                        <h3>
                                            Total: 
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <table border="0" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td className="cart-btn">
                                                    <Button fontSmall green >
                                                       <Link to="/product"> 
                                                          Continue Shopping 
                                                       </Link>
                                                    </Button>
                                                    
                                                </td>
                                                <td className="cart-btn">
                                                    <Button secondary fontSmall>
                                                       <Link to="/payment">
                                                         Check Out
                                                       </Link>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tr>
                            </table>
                        </tr>
                    </tbody>
                </table>
                ) : (
                    <p className="errorMsg">
                        {errorMsg}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Checkout;
