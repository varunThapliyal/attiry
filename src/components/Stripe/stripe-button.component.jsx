import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckOutButton = ({price})=>{


    const StripePrice=price*100;
    const PublishableKey='pk_test_5DqAEplRsgtshLeYYRkP9bbX00L3vjtxSH';
    const onToken= token =>{
        console.log(token);
        alert('Payment Successful');
    }
return (
<StripeCheckout
    label='Pay Now'
    name='Attiry Clothing Pvt.Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your Total is ${price}`}
    amount={StripePrice}
    panelLabel='Pay'
    token={onToken}
    stripeKey={PublishableKey}

    />
)

}
export default StripeCheckOutButton;