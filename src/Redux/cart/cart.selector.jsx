import {createSelector} from 'reselect';




const SelectCart= state => state.cart;



export const SelectCartItems=createSelector(
     
    [SelectCart],
    (cart) => cart.cartItems

)
export const SelectHidden= createSelector(
    [SelectCart],
    cart => cart.hidden
)
export const SelectCartItemsCount=createSelector(
    [SelectCartItems],
    cartItems =>
    (cartItems).reduce((qty,cartItem)=>
          qty+cartItem.quantity
    ,0)
);
export const SelectCartTotal=createSelector(
    [SelectCartItems],
    cartItems =>
    (cartItems).reduce((qty,cartItem)=>
          qty+cartItem.quantity*cartItem.price
    ,0)
);