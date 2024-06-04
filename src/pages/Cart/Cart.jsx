import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

function Cart() {
  const { cartItem, food_list, setCartItem, totalAmount } = useContext(StoreContext);
  const [fixedAmount,setFixedAmount] = useState(0);

  useEffect(()=>{
    setFixedAmount(totalAmount+2);
  },[totalAmount])

  const isEmptyObject = (obj) => {
    if (Object.keys(obj).length === 0) return true;
    else if (Object.values(obj).includes(0)) return true;
    else return false;
  };

  return (
    <>
      {isEmptyObject(cartItem) ? (
        <div className="empty-basket">
          <div className="empty-basket-content">
            <h2>Oops! Your Basket is Empty</h2>
            <p>Why not add some delicious food to your basket?</p>
          </div>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item) => {
              if (cartItem[item._id] && cartItem[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>${item.price * cartItem[item._id]}</p>
                      <p
                        className="cross"
                        onClick={() =>
                          setCartItem((prev) => {
                            const modifiedCart = { ...prev };
                            delete modifiedCart[item._id];
                            return modifiedCart;
                          })
                        }
                      >
                        X
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>SubTotal</p>
                  <p>{totalAmount}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>{2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Total</p>
                  <p>{fixedAmount}</p>
                </div>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
           <div className="cart-promocode">
            <div>
              <p>
                If you have promo code, Enter it here
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code ..." />
                    <button>Submit</button>
                </div>
              </p>
            </div>
           </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
