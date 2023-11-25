import React, { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import UserContext from '../context/userContext'

const Cart = () => {

const data=useContext(UserContext)

    return (
        <>
            <div className="container-fluid cart-items">
                <div className="row">
                    <div className="col-lg-8 col-md-6 card-left">
                        {data.cart.length > 0 ? (
                            <div className="list-group list-group-numbered">
                                {data.cart.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        item={item}
                                    />
                                ))}
                            </div>
                        ) : (
                            <h3>No items in Cart</h3>
                        )}
                    </div>
                    <div className="col-lg-4 col-md-6 card-right">
                        <div className="card total-card">
                            <div className="total-head">PRICE DETAILS</div><hr />
                            <div className="total-text">Discounts <span>Per Order 10%</span></div>
                            <div className="total-text">Delivery Charges <span>₹500</span></div><hr />
                            <div className="total-amount"><h6>Total Amount <span>₹{data.total}</span> </h6></div><hr />
                            <div className="total-off">You will save 50% on this order</div>
                        </div>
                        <div className="order-btn">
                            <button>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart