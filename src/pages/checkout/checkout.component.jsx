import React from 'react';
import './checkout.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {SelectCartItems,SelectCartTotal} from '../../Redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../components/Stripe/stripe-button.component';



const CheckOutPage=({cartItems,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
                 <span>Product</span>
             </div>
             <div className='header-block'>
                 <span>Description</span>
             </div>
             <div className='header-block'>
                 <span>Quantity</span>
             </div>
             <div className='header-block'>
                 <span>Price</span>
             </div>
             <div className='header-block'>
                 <span>Remove</span>
             </div>

        </div>
        {
            cartItems.map(cartitem => <CheckoutItem key={cartitem.id} cartitem={cartitem}/>)
        }
        <div className='total'>
            <span>Total:${total}</span>
            
            </div>
            <div className='test-warning'>**Please use this test credit card for payments**
            <br/>
               4242 4242 4242 4242 - Exp : 01/20 - CVV : 123
            </div>
             <StripeCheckOutButton price={total}/>
    </div>
)
const mapStateToProps=createStructuredSelector({
    cartItems:SelectCartItems,
    total:SelectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);