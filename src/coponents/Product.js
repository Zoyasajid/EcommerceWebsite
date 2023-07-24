import React ,{useEffect,useState}from 'react'
import { useLocation } from 'react-router-dom'


const DetailPage = () => {
 const location = useLocation();
 const [data,setData]=useState()

 const id = location.state
 console.log(location.state ,"navi")
  const API = `https://fakestoreapi.com/products/${id}`
  console.log(API ,'real')
  useEffect(() => {
      fetch(API).then(j => j.json()).then(daTa =>
          setData(daTa))
    },[])
      return(   
  <div>
    
    <div className='display' key={id}>
      <div className='item-info'>{data && data.category}</div>
        <div className='image'>
          <img src={data && data.image} alt='photo' className='photo'></img>
        </div>
        <div className="item-info">
							<header>
								<h4>{ data && data.title}</h4>
								<h4 className="price">${data && data.price}</h4>
							</header>
							<p className="item-text"><i>{data && data.description}</i></p>
              <p className='item-text'>{data && data.count}</p>
              
						</div>
        </div>
  </div>
 )
}

// export default DetailPage<Link to={"/product"} state={item.id}>


import React, { useEffect, useState } from "react";
function CardsApi() {
  const API_URL = "https://fakestoreapi.com/products";

  const [Data, setData] = useState([]);
  const [category, setCategory] = useState(Data);

  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let t = await fetch(API_URL);
    let data = await t.json();
    setData(data);
  }

  const getunique = (close, property) => {
    let newval = close.map((curEle) => {
      return curEle[property];
    });

    return (newval = ["All", ...new Set(newval)]);
  };
  
  const onlyData = getunique(Data, "category");
  function updatevalue(category) {
    
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.text())
      .then((data) => {setCategory(data);const close = category === "All"
      ? Data
      : Data.filter(item => item.category === category);
  setData(close)});
  }
  console.log(category);

  return (
    <div>
      <div>
        {onlyData.map((curEle, index) => {
          return (
            <div className="Boon">
              <button
                className="category"
                key={index}
                value={category}
                type="button"
                name="category"
                onClick={() => updatevalue(curEle)}
              >
                {curEle}
              </button>
            </div>
          );
        })}
      </div>
      <div className="App">
        <h2>DEALS OF THE DAY</h2>
      </div>
      <div className="section-center">
        {/* //  (category === 'All' ? Data : Data.filter(itemb => itemb.category === category)); */}
        {Data.map((item) => {
          const { id, title, image, description, price } = item;

          return (
            <div className="Card-container">
              <article className="menu-item" key={id}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardsApi;
