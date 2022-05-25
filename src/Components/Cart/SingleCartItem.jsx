import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AppState } from "../../Context";

const SingleCartItem = ({ prod }) => {
  const { cart, setCart } = AppState();

  const handleDecrament = (prod_url) => {
    setCart((cart) =>
      cart.map((item) =>
        prod_url === item.url
          ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : 0) }
          : item
      )
    );
  };

  const handleIncrament = (prod_url) => {
    setCart((cart) =>
      cart.map((item) =>
        prod_url === item.url
          ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) }
          : item
      )
    );
  };

  return (
    <div className="cart-item">
      <img src={prod.url} alt={prod.name} />
      <div className="cart-item-price">{prod.price}€</div>
      <AiFillDelete
        onClick={() => setCart(cart.filter((c) => c.url !== prod.url))}
        fontSize="25px"
      />

      <div>
        <button onClick={() => handleDecrament(prod.url)}>-</button>
        {prod.quantity}
        <button onClick={() => handleIncrament(prod.url)}>+</button>
      </div>
    </div>
  );
};

export default SingleCartItem;
