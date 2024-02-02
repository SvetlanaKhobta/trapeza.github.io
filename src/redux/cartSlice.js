import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {

        addItemToCart: (state, action) => {
            const timeId = new Date().getTime()
            const newCart=  state.cartItems.findIndex(item => item.dishId === action.payload.dish.id)
            if(newCart === -1){
            state.cartItems.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantyti: action.payload.quantyti,
                totalPrice: action.payload.quantyti * action.payload.dish.price
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Блюдо добавлено в корзину",
                showConfirmButton: false,
                timer: 1000
            });
            }

            else{
            state.cartItems = [...state.cartItems];
            state.cartItems[newCart].quantyti+=action.payload.quantyti;
            state.cartItems[newCart].totalPrice+= action.payload.quantyti * action.payload.dish.price;
            }
        Swal.fire({
            position: "center",
            icon: "success",
            title: "добавлено в корзину",
            showConfirmButton: false,
            timer: 1000
        });
        },
        
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }}
)
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
    
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer;