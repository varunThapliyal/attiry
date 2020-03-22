import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './header.style.scss';
import {auth} from '../../firebase/firebase';
import Cart from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {SelectHidden} from '../../Redux/cart/cart.selector';
import {SelectCurrentUser} from '../../Redux/user/user.selector';


const Header = ({currentUser,hidden}) =>(
     <div className='header'>
          <Link className='logo-container' to='/'>

                  <Logo className='logo'/>              
          </Link>

          <div className='options'>
                  <Link className='option' to='/shop'>Shop</Link>
                  <Link className='option' to='/shop'>Contact</Link>
                  {
                     currentUser?<div className='option' onClick={()=>auth.signOut()}>Sign-Out</div>:
                     <Link to='/signin'>Sign-in</Link>
                  }
                  <Cart />
          </div>
          {
                  hidden?null:<CartDropDown/>

          }
     </div>
)
const mapStateToProps=createStructuredSelector({

        currentUser:SelectCurrentUser,
        hidden:SelectHidden
})

export default connect(mapStateToProps)(Header);