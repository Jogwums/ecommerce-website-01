import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cartSelectors'
import { createStructuredSelector } from 'reselect'


import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import { Button, BtnLink } from '../../globalStyles'

import Item from './Item'

const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


const Checkout = () => {
    const { cartItems, total } = useSelector(mapState)
    const dispatch = useDispatch();
    const history = useHistory();

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
                                    <th className="del-desc">Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th className="del-trash">Remove</th>
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
                                <tr align="right">
                                    <td>
                                        <h3>
                                            Total: {`\u20A6`}{total}
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <table className="btn_group" border="0" cellPadding="0" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td className="cart-btn">
                                                    <Button pay fontSmall full>
                                                       <BtnLink onClick={() => history.goBack()}> 
                                                          Continue Shopping 
                                                       </BtnLink>
                                                    </Button>
                                                    
                                                </td>
                                                <td className="cart-btn">
                                                    <Button pay fontSmall full>
                                                       <BtnLink to="/payment">
                                                         Check Out
                                                       </BtnLink>
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
