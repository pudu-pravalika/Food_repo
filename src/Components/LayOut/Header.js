import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import "../../styles/headerComponentStyles.css";
import {BsFillCartFill} from "react-icons/bs";
import CardComponent from '../Description/CardComponent';
export default function Header(){
  const [showSelecteditems,setShowSelectedItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const setShowSelectedMenuItems = (items)=>{
      setShowSelectedItems(items);
  }
  const quantity = showSelecteditems.reduce((value, item) => {
    return item.quantity + value;
  }, 0);
  const total = showSelecteditems.reduce((value, item) => {
    return item.price + value;
  }, 0);
  
    return(
    
    <>
      <Navbar bg="dark" className="header">
         <Container>
          <Navbar.Brand href="#home">
            <h2 style={{color:"white"}}><b>React Meals</b>
            <button style={{marginLeft:"45rem",borderRadius:"2rem",width:"10rem"}}><BsFillCartFill/> Cart {quantity > 0 ? quantity : ''}</button></h2>
           
          
          </Navbar.Brand>
         
        </Container> 
      </Navbar>
      <div>
            <img src="https://media.istockphoto.com/id/922783734/photo/assorted-indian-recipes-food-various.jpg?s=612x612&w=0&k=20&c=p8DepvymWfC5j7c6En2UsQ6sUM794SQMwceeBW3yQ9M=" className="image"></img> 
            
            </div>
            <CardComponent setShowSelectedMenuItems={setShowSelectedMenuItems}/>
            
     
    </>
  );
    
}