import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../CustomButton/custom-button.component';
import {connect} from 'react-redux';
import {AddItems} from '../../Redux/cart/cart.actions';




const CollectionItem = ({item,AddItems}) => {
  const {imageUrl,name,price}=item;

    return(
        <div className='collection-item'>
             <div className='image'
                  style={{
                      backgroundImage: `url(${imageUrl})`
                  }}
             />
             <div className='collection-footer'>
                <span className='title'>{name}</span>
                <span className='price'>{price}</span>
             </div>
             <CustomButton onClick={()=> AddItems(item)} inverted>Add to Cart</CustomButton>
       </div>
    )
       
       
}
const mapDispatchToProps= dispatch =>({
    AddItems: item=> dispatch(AddItems(item))
}
)
export default connect(null,mapDispatchToProps)(CollectionItem);