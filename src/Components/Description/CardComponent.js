import React, { useEffect } from "react";
import { useState } from "react";
import { Card,Button } from "react-bootstrap";
import "../../styles/cardComponentStyles.css";
export default function CardComponent({setShowSelectedMenuItems}){
  const items = [{
    id:1,
   name:"Chicken Manchuriya",
   description:"Very delicious and spicy!!!",
   price:80,quantity:1
  },{id:2,
     name:"Veg Manchuriya",
  description:"Very delicious and spicy!!!",
  price:90,quantity:1},{id:3, name:"Chicken Noodles",
  description:"Very delicious and spicy!!!",
  price:100,quantity:1}];
  const [menuItems,setMenuItems] = useState(items);
  const [selectedItems,setSelectedItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const addToCart = (item,k) =>{
    console.log("helloo");
    const tempItems = [...selectedItems];
    const cartindex = tempItems.findIndex(el => el.id === item.id);
    if(cartindex != -1){
    tempItems[cartindex].quantity+=1;
    tempItems[cartindex].price = tempItems[cartindex].price * tempItems[cartindex].quantity;
    setSelectedItems([...tempItems]);
    }
    else{
      const tempItems = [...selectedItems];
    setSelectedItems([...tempItems,item]);
    }
    // setCartCount(c);
    // setCartsCount(c);
  //  const selectedMenuItems = [...selectedItems]
    console.log(selectedItems);
   // setShowSelectedMenuItems([...selectedItems]);
    }
    useEffect(()=>{
      setShowSelectedMenuItems([...selectedItems])
    },[selectedItems])
    // console.log(selectedItems);
  const removeFromCart = (item) =>{
    const tempItems = [...selectedItems];
    const cartindex = tempItems.findIndex(el => el.id === item.id);
    if(cartindex != -1){
    tempItems[cartindex].quantity-=1;
    tempItems[cartindex].price = tempItems[cartindex].price * tempItems[cartindex].quantity;
    setSelectedItems([...tempItems]);
    }
    else{
      const tempItems = selectedItems.filter(el => el.id != item.id);
    setSelectedItems(tempItems);
    }

  }
    console.log("cartcountttt"+cartCount);
    return(
      <>
      <div class="row">
       
                 <Card className="card-des-style">
      <Card.Body>
       
      <section >
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
      
       </Card.Body>
        </Card>
      </div>
     <div class="row">
      
      <Card className="card-menu-style">
      {items.map((item,i)=>(
<Card.Body>
<div class="row">
<div className="col-8">
<div class="row" style={{display:"flex",justifyContent:"flex-start"}}>

<b style={{display:"flex",justifyContent:"flex-start"}}>{item.name}</b>
</div>
<div class="row" style={{display:"flex",justifyContent:"flex-start"}}>
<span style={{display:"flex",justifyContent:"flex-start"}}>{item.description}</span>

</div>
<div class="row" style={{display:"flex",justifyContent:"flex-start"}}>
<b style={{display:"flex",justifyContent:"flex-start"}}>{item.price}</b>
</div>



</div>
<div className="col-md-4" style={{display:"flex",justifyContent:"flex-end"}}>
<div class="btn-group">
<button onClick={()=>addToCart(item,i)}>+</button>
<button onClick={()=>removeFromCart(item,i)}>-</button>
</div>
</div>
</div>
<hr/>
</Card.Body>))}
</Card>
</div>
      
      </>
    )
}