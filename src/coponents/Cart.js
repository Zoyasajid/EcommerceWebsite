import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
import "./Cart.css";
function Cart() {
  const [carts, setCarts] = useState([]);
  const [itemquantity, setItemQuantity] = useState(1);
  const [mergeData, setMergeData] = useState([]);
  var total = 0;
  const API_CAT = "https://fakestoreapi.com/products";

  async function fetchDataa() {
    let responce = await fetch(API_CAT);
    let categoriesData = await responce.json();
    setCarts(categoriesData);
  }
  useEffect(() => {
    fetchDataa();
  }, []);

  useEffect(() => {
    if (carts?.length) {
      const data = JSON.parse(localStorage.getItem("products")) || [];
      const mergeArray = data.map((cart) => {
        const products = carts.find((product) => product.id === cart.productId);
        if (products) {
          return {
            ...products,
            quantity: cart.quantity,
          };
        } else {
          return cart;
        }
      });
      setMergeData(mergeArray);
      console.log(mergeData, "jhgfd");
      setItemQuantity(mergeData.quantity);
    }
  }, [carts]);
  console.log(itemquantity);
  function clickonsave() {
    alert("Product save for later");
  }
  const handlecancelbtn = (productId) => {
    const cancelbtn = mergeData.filter((item) => item.id !== productId);
    setMergeData(cancelbtn);
  };
  return (
    <div className="main">
      <div className="cart-card">
        <div className="header">
          <h4>MY CART</h4>
          <p>item Your Like to buy</p>
        </div>
        <div className="cart-list">
          {mergeData.map((item) => {
            total += item.price * item.quantity;
            return (
              <div className="carts-list">
                <img src={item.image} alt={item.title} className="image" />
                <br />
                <div className="tag">
                  <div className="price-can">
                    <p className="pricepl">
                      ${item.price}
                      <br />
                    </p>
                    <p
                      className="cancel"
                      onClick={() => handlecancelbtn(item.id)}
                    >
<FontAwesomeIcon icon="fa-solid fa-xmark" className="cancel"/>✖</p>
                  </div>
                  <p className="cart-title">{item.title}</p>
                  <div className="quan-save">
                    <button onClick={clickonsave} className="save">
                      {" "}
                      ❤ Save for later
                    </button>
                    <div className="quantity">
                      <button
                        onClick={() =>
                          setItemQuantity(() => {
                            {
                              item.quantity--;
                            }
                          })
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => setItemQuantity(item.quantity++)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              // console.log(i)
            );
          })}
          <h2 className="subtotal">SUB-TOTAL: ${total.toFixed(2)}</h2>
        </div>
      </div>
      <div className="total">
        <h2>TOTAL</h2>
        <div className="total-del">
          <h4 className="total-subtotal">
            Sub-total:<h3 className="total-price">${total.toFixed(2)}</h3>
          </h4>
          <h4 className="delivery">Delivery</h4>
          <p className="free">Standard Delivery (free)</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
