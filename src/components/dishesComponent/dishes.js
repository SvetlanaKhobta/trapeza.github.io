
import React from "react";
import data from "../../data/data";
import Dish from "./dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";
import AllCategories from "../filter/allCategories";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Dishes = () => {

   const selectedCategory = useSelector(getSelectedCategory);   

    return(
        <div >
            
             <AllCategories/>
         
   
    <div className=" d-flex justify-content-around flex-wrap" >
    {data
    .filter(dish => {
      if (selectedCategory === 'посмотреть все') return true;
      return selectedCategory === dish.category1 || selectedCategory === dish.category2;
    })
    .map((dish) => <Dish key={dish.id} dish={dish}/>)}
 </div>
 <div className="header">
 <Link className='link back '  to="/cart">Перейти в корзину</Link>
 </div>
 
 </div>
        )
}
export default Dishes;