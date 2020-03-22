import React from 'react';
import './checkout-item.style.scss';
import {connect} from 'react-redux';
import {RemoveItem,AddItems,DecreaseItem} from '../../Redux/cart/cart.actions'




const CheckoutItem=({cartitem,RemoveItem,AddItems,DecreaseItem})=>{
      const {name,quantity,price,imageUrl}=cartitem;

      return(

            <div className='checkout-item'>
                    <div className='image-container'>
                       <img src={imageUrl} alt='itemImage'/>
                    </div>
                   <span className='name'>{name}</span>
                   <span className='quantity'>
                    <div className='arrow' onClick={()=>DecreaseItem(cartitem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                    <div className='arrow' onClick={()=>AddItems(cartitem)}>&#10095;</div>
                   </span>
                   <span className='price'>{price}</span>
                   <div className='remove-button' onClick={()=>RemoveItem(cartitem)}>&#10005;</div>
            </div>
      
      )
}




const mapDispatchToProps=(dispatch) => ({

      RemoveItem: item => dispatch(RemoveItem(item)),
      AddItems: item => dispatch(AddItems(item)),
      DecreaseItem:item => dispatch(DecreaseItem(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);