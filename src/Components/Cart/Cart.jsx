import React, { useContext } from "react";
import './Cart.scss'
import { CartContext } from '../../Context/CartContext';
const Cart = () => {
    const { myCart, total } = useContext(CartContext);
    console.log("length: ", myCart.length);
    return (
        <div>
            {console.log("length: ", myCart.length)
            }
            <div className="header">YOUR BILL</div>
            <div className="container">
                <div className="cart-container">
                    {
                        (myCart.length === 1)
                            ?
                            (<div className="message"> Your cart is empty</div>)
                            :
                            (
                                myCart.slice(1).map((dog) => {
                                    return (
                                        <div className="dog-info">
                                            <img className="img" src={dog.imageUrl} alt="" />
                                            <div className="name">{dog.name}</div>
                                            <div className="price">{dog.price}$</div>
                                        </div>
                                    )
                                })
                            )
                    }
                    <div className="total">Total: {total}$</div>
                    <div />
                </div>
            </div>
        </div>

    )

}
export default Cart;