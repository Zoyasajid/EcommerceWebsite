import React,{useEffect,useState} from 'react'
function CardsApi() {
    const API_URL="https://fakestoreapi.com/products"  
    const [Data,setData]=useState([])  
     useEffect(()=>{
   fetchData()
     },[])
   
   async function fetchData(){
     let t =await fetch(API_URL)
     let data= await t.json();
     setData(data)
     console.log(setData)}

     return <div className="section-center">
     {Data.map((item)=>{
         const {id,title,image,description,price}=item
     return (
        <div className='Card-container'>
         <article className="menu-item" key={id}>
     <img src={image} alt={title} className="photo" />
     <div className="item-info">
         <header>
             <h4 >{title.substring(0,13)}</h4>
             <h3 className="price">${price}</h3>
         </header>
         <p className="item-text" ><i>{description.substring(0,140)}</i>                
                </p>
        
     </div>
 </article>
 </div>
     )
 })}
</div>

   }

   export default CardsApi