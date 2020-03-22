import ToggleCartAction from './cart.types';
import {AddCartItem,DecreaseCartItem} from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer=(state=INITIAL_STATE,action) => {
      switch(action.type){
          case ToggleCartAction.TOGGLE_CART_ICON:
              return {
                  ...state,
                  hidden:!state.hidden
              };
            case ToggleCartAction.ADD_ITEMS:
                return {
                    ...state,
                    cartItems:AddCartItem(state.cartItems,action.payload)
                }  
             case ToggleCartAction.CLEAR_ITEM_FROM_CART:
                 return{
                     ...state,
                     cartItems:state.cartItems.filter(cartItem => cartItem.id!==action.payload.id)

             }   
             case ToggleCartAction.DECREASE_ITEM_FROM_CART:
                 return {
                     ...state,
                     cartItems:DecreaseCartItem(state.cartItems,action.payload)

                 }
           default : return state;   
      }
}

export default CartReducer;