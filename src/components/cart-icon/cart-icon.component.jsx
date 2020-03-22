import React from 'react';

import {connect} from 'react-redux';
import {ToggleCartIcon} from '../../Redux/cart/cart.actions'

import {ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';
import {SelectCartItemsCount} from '../../Redux/cart/cart.selector'; 

import './cart-icon.style.scss';




const Cart = ({ToggleCartIcon,itemCount}) => (

<div className="cart-icon">
      <CartIcon className="shopping-icon" onClick={ToggleCartIcon}/>
<span className="item-count">{itemCount}</span>

</div>

);

const mapStateToProps=state =>({

   itemCount:SelectCartItemsCount(state)
})

const mapDispatchToProps= (dispatch)=>(
  {
    ToggleCartIcon: () => dispatch(ToggleCartIcon())
  }
)


export default connect(mapStateToProps,mapDispatchToProps)(Cart);