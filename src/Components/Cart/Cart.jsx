import React, { useEffect } from "react";

import { AppState } from "../../Context";

import "./Cart.css";

import SingleCartItem from "./SingleCartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = AppState();

  const { total, setTotal } = AppState();

  // let history = useHistory();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  // const handlePayment = () => {
  //   history.push("/payment");
  // };

  return (
    <div className="cart">
      <div className="cart-items-containter">
        {cart.map((prod) => (
          <SingleCartItem prod={prod} />
        ))}
      </div>
      <div className="subtotal-container">
        <span className="subtotal-container-title">
          Subtotal: ({cart.length}) items
        </span>
        <span className="total">Total: {total} €</span>
        <Link to="/payment" className="links">
          <button>Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
