import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
// import Cart from "./Cart";
const DetailPage = () => {
  // const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        // Assuming you have an API endpoint to fetch a single item by ID
        const getItemId = await fetch(
          `https://fakestoreapi.com/products/${id}`
        );
        const result = await getItemId.json();
        setItem(result);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItemById();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  const addTocart = () => {
const cartItems = JSON.parse(localStorage.getItem('products')) || [];

const existingItem = cartItems.find(product => product.productId === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
     cartItems.push({ productId: item.id, quantity: 1 });
    }
    localStorage.setItem('products', JSON.stringify(cartItems));
    
  };
  
  // <Cart/>


  return (
    <main>
      <div class="product-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div class="product-info">
        <h2 className="title">{item.title}</h2>
        <p class="product-price">${item.price}</p>
        <hr />
        <p class="product-description">{item.description}</p>

       <Link to="/product/cart"><button onClick={addTocart} className="detailbtn">Add to Cart</button></Link>  
      </div>
    </main>
  );
};

export default DetailPage;
