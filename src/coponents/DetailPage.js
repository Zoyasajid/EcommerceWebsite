// import {useParams} from "react-router-dom"
// function DetailPage() {
//     const params=useParams()
//     const {id} = params
//     console.log(id)
//   return (
//     <div></div>
//   )
// }
// src/CardDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  console.log(id)
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        // Assuming you have an API endpoint to fetch a single item by ID
        const getItemId = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await getItemId.json();
        setItem(result);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItemById();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (   
    < main>
    <div class="product-image">
      <img src={item.image} alt={item.title }/>
    </div>
    <div class="product-info">
      <h2 className='title'>{item.title}</h2>
      <p class="product-price">${item.price}</p>
      <hr/>
      <p class="product-description">{item.description}</p>
    
      <button>Add to Cart</button>
    </div>
    </main>
      );
    };
 

export default DetailPage