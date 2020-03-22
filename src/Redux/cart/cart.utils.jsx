export const AddCartItem= (cartItems,newItem)=>{

    const ExistingCartItems=cartItems.find(
        cartItem => cartItem.id===newItem.id
        )
    if(ExistingCartItems){
        return cartItems.map(cartItem =>
            cartItem.id=== newItem.id
            ? {...cartItems,quantity:cartItem.quantity+1}
            :cartItem
            )
    }
    return [...cartItems,{...newItem, quantity: 1}];
};
export const DecreaseCartItem= (cartItems,ItemToRemove)=>{
    const ExistingCartItems=cartItems.find(
        cartItem => cartItem.id===ItemToRemove.id
        )
        if(ExistingCartItems.quantity===1){
             return cartItems.filter(cartItem=> cartItem.id!==ItemToRemove.id)
        }

        return cartItems.map(
            cartItem=> 
            cartItem.id===ItemToRemove.id?
            {...cartItems,quantity:cartItem.quantity-1}:
            cartItem
        )
}
