import React from 'react';
import { connect, useDispatch} from 'react-redux'
import { addProduct, removeCartItem, reduceCartItem, clearCart, cartTotal } from '../../redux/Cart/cartActions'
import './styles.css'

const mapState = (state) => {
    return {
        cart: state.cartData
    }
}

const Cart = () => {
    const { cart } = React.useReducer(mapState)

    const dispatch = useDispatch();

    return (
        <div className="shopping-cart">
            <div>
                <h2>Your Cart</h2>
            </div>
            <div className="cart-item">
                <table>
                    <tr>
                        <th>S/N</th>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Phone</td>
                        <td>1</td>
                        <td>120</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Apple</td>
                        <td>1</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Blanket</td>
                        <td>2</td>
                        <td>100</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}


export default connect(mapState, null)(Cart);
