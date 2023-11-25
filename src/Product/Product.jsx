import React, { useContext } from "react";
import './Product.css'
import UserContext from "../context/userContext";

function Product({ product, isInCart, }) {

  const data=useContext(UserContext)

  const handleClick = () => isInCart() ? data.handleRemoveItem(product) : data.handleAddtoCart(product)
  return (
    <>
      <div class="col mb-5">
        <div class="card">
          <img src={product.img} class="card-img-top" alt="..."></img>
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{product.name}</h5>
              <b>₹{product.price}</b>
              <div className="starcenter">
                <div className='star'>
                  <b>{product.stars}</b>
                  <img src={product.starpng} alt="" />
                </div>
              </div>

            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              <button onClick={handleClick} disabled={isInCart()} className="btn btn-primary">
                {isInCart() ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;