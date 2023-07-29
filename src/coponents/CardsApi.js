import React, { useEffect, useState } from "react";
import {Link }from 'react-router-dom'
import Navbar from "./Navbar";
// import Cart from "./Cart";
// import Navbar from "./Navbar";
function CardsApi() {
  const API_URL = "https://fakestoreapi.com/products";

  const [product, setProduct] = useState([]);
  const [categories,setCategories]=useState([])
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let t = await fetch(API_URL);
    let data = await t.json();
    // setCategory([]) 
    setProduct(data);
  }
  const API_CAT = "https://fakestoreapi.com/products/categories";
  useEffect(() => {
    fetchDataa(); 
  }, []);


  async function fetchDataa() {
    let responce = await fetch(API_CAT);
    let categoriesData = await responce.json();
    setCategories(categoriesData);
  }

const handleCategory = async (category) => {
  const responcecategory = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const filterProduct = await responcecategory.json()
  setProduct(filterProduct)
}


  return (
    <div>
<Navbar/>
      <>
        {categories.map((category=>{
          return  <button className='btn set' onClick={()=>handleCategory(category)}>{category}</button>
        }))}
  </>
     
      <div className="App">
        <h2>DEALS OF THE DAY</h2>
      </div>
      <Link to="/product">
      <div className="section-center">
      {product?.map((item) => {
       
            const { title, image, description, price } = item;          
          return (
              
              
            <div className="Card-container" >
                      <Link to={`/product/${item.id}`}>
              <article className="menu-item" key={item.id}>
                <img src={image} alt={title} className="photo" />
                
                <div className="item-info">
                  
                  <header>
                    <h4>{title.substring(0, 13)}</h4>
                    <h3 className="price">${price}</h3>
                  </header>
                  <p className="item-text">
                    <i>{description.substring(0, 140)}</i>
                  </p>
                </div>
              </article>

              {/* <CardsApi key={product.id} product={product} /> */}
        </Link>
            </div>
          )
          
        })}

      </div>
    </Link>
    </div>
  );

}
export default CardsApi;
