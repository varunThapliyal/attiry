import React from 'react';
import {connect} from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';
import {SelectCartItems} from '../../Redux/cart/cart.selector'
import CustomButton from '../CustomButton/custom-button.component';
import {withRouter} from 'react-router-dom';
import './cart-dropdown.style.scss';



const CartDropDown= ({cartItems,history}) => (
   <div className="cart-dropdown">
        <div className="cart-items">
              {
                cartItems.length?
                (cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item={cartItem} />)):
                (<span className="empty-message">Your Cart is empty</span>)
              }
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}> Go To Checkout</CustomButton>
   </div>
)

const mapStateToProps=(state)=>( {
      cartItems:SelectCartItems(state)
} )


export default withRouter(connect(mapStateToProps)(CartDropDown));