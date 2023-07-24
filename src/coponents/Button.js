import React,{useState,useEffect} from 'react'

function Button() {
    const [categories,setCategories]=useState([])
    const [category,setCategory]=useState()
    const API_CAT = "https://fakestoreapi.com/products/categories";
  useEffect(() => {
    fetchDataa();
  }, []);
console.log('selected category', category)
  async function fetchDataa() {
    let responce = await fetch(API_CAT);
    let categoriesData = await responce.json();
    setCategories(categoriesData);
  }
 
//   console.log(categories)
function handleCategory(category){
    
    setCategory(category)
}

  return (
    <div>
        {categories.map((category=>{
          return  <button className='btn set' onClick={()=>handleCategory(category)}>{category}</button>
        }))}
    </div>
  )
}

export default Button