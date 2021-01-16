import React from 'react';
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/Cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

import { FaTrash } from 'react-icons/fa'

import './styles.css';

const mapState = createStructuredSelector({
    cartItems: selectCartItems
})

const Checkout = ({}) => {
    const { cartItems } = useSelector(mapState)
    console.log(cartItems);

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="cart">
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
                                    <th>Remove</th>
                                </tr>
                            </tbody>
                        </table>
                        </tr>
                        <tr>
                            <table border="0" cellPadding="0" cellSpacing="0">
                                <tbody>
                                    {cartItems.map((item, pos) => {
                                        return (
                                            <tr key={pos}>
                                                <td>
                                                    {item.name}
                                                </td>
                                                <td>
                                                    {item.description}
                                                </td>
                                                <td>
                                                    {item.count}
                                                </td>
                                                <td>
                                                    {item.price}
                                                </td>
                                                <td>
                                                   <button className="btn btn-danger" onClick="">
                                                      <FaTrash />
                                                   </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </tr>
                        <tr>
                            <table align="right" border="0" cellPadding="10" cellSpacing="0" >
                                <tr align="left">
                                    <td>
                                        <h3>
                                            Total: 
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <table border="0" cellPadding="10" cellSpacing="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <button className="btn btn-success">
                                                        Continue Shopping 
                                                    </button>
                                                    
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger">
                                                        Check Out
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tr>
                            </table>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Checkout;
