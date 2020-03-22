import ToggleCartAction from './cart.types';

export const ToggleCartIcon= () => (
      {
      type:ToggleCartAction.TOGGLE_CART_ICON
      }
)

export const AddItems= (item) =>(
    {
        type:ToggleCartAction.ADD_ITEMS,
        payload:item
    }
)
export const RemoveItem= (item) =>(
    {
        type:ToggleCartAction.CLEAR_ITEM_FROM_CART,
        payload:item
    }
)
export const DecreaseItem=(item)=>({
      type:ToggleCartAction.DECREASE_ITEM_FROM_CART,
      payload:item
})
