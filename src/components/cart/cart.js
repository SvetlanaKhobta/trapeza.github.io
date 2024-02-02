import { useSelector } from "react-redux";
import CartItem from "./cartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { Link } from 'react-router-dom';
import cart from '../../images/cart.jpg';
import Swal from 'sweetalert2';

    const Cart = () => {
        const alert =() => {
            Swal.fire({
                icon: "error",
                title: "Ой...",
                text: "Спасибо за внимание, это учебный сайт",
            });
        }

        const cartItem = useSelector(getCartItems);

        const totalPrice = useSelector(getTotalPrice);
    
    return(

        <div className="header">

            { cartItem.length === 0 ? (<div className="emptyCart">
                <img src={cart} alt="cart"  width="200px"/>
                <span>Ваша корзина пуста</span>
                </div>):
                (<div>
                {cartItem.map((cartItem) =>   <CartItem key={cartItem.id} cartItem = { cartItem }/>)}
                <div className="header">
                <h6>Общая цена {totalPrice}р</h6>
                <button className='link main' onClick={alert}>Оформить заказ</button>
                </div>
                </div>)}

                <Link className='link back' to="/dishes">Вернуться в меню</Link>

        </div>)
    }

export default Cart;