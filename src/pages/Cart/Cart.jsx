import React from 'react';
import './cart.css';

const Cart = ({ cartData, setCartData }) => {
  const handleIncrement = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartData((prevData) =>
      prevData.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <section className="cart">
      <div className="container">
        <h1 className="cart-header">Cart</h1>
        {cartData.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-left">
              <img src={item.image} alt="" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="cart-item-right">
              <div>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <p>price: ${item.price * item.count}</p>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
