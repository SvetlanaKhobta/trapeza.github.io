
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import ChangeQuantyti from "../cart/changeQuontity";
import { useState } from "react";
const Dish = ({dish}) => {
    const [quantyti, setQuantyti] = useState(1);
    const dispatch = useDispatch()
  
    return( 
    <div className=" d-flex justify-content-around flex-wrap pb-2 " >
        
 <Card style={{ width: '18rem'}} >
 <Card.Img variant="top"  src={`${dish.image}.jpg`} height="250px"/>
 <Card.Body>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Text>
                    {dish.price} рублей
                </Card.Text>

<ChangeQuantyti quantyti = {quantyti} setQuantyti = {setQuantyti} />
<Button variant="outline-dark" onClick={() => {dispatch(addItemToCart({dish,quantyti}))}}>В корзину</Button>  
</Card.Body>

</Card>     
       
        </div>)
}
export default Dish;
