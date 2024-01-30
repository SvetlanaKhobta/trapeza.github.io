import data from "../../data/data"
import { removeItemFromCart } from "../../redux/cartSlice"
import { useDispatch } from "react-redux"

const CartItem = ({ cartItem }) => {
    const dishes = data.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
   
  
    return(
    <div className="header cartItem">
        <p>{dishes.name}</p>
        <img src={`${dishes.image}.jpg`} height="150px" width="200px" alt="dish" />
        <p>Порции: {cartItem.quantyti} </p>
        <p> Стоимость {dishes.price*cartItem.quantyti} р</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="cart"/>
            </span>
    </div>
    )
}
export default CartItem;