import { useContext, useState } from "react";
import "./Cart.css";
import UserContext from "../context/userContext";

function CartItem({item,}) {
  const [qty, setQty] = useState(1);
  const data=useContext(UserContext)

  const increaseQuantity = () => {
    setQty(qty + 1);
    data.handleIncreaseQuantity(item.price);
  };

  const decreaseQuantity = () => {
    if (qty > 1) {
      setQty(qty - 1);
      data.handleDecreaseQuantity(item.price);
    }
  };

  return (
    <>
      <div className="card cardss">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            <div className="img">
              <img src={item.img} alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 title-margin">
            <div className="title">{item.name}</div>
            <div className="buttons">
              <button
                disabled={qty === 1}
                className="btn"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className="qty">{qty}</div>
              <button className="btn" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <div className="price">₹{qty * item.price}</div>
          </div>
          <div className="col-lg-5 col-md-12 remove">
            <p>Delivery by Wed Nov 22 | ₹40 <span>Free</span> </p>
            <button
              onClick={() => data.handleRemoveItem(item)}
              className="btn btn-sm btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
