import React from 'react';
import './collection.style.scss';
import {connect} from 'react-redux';
import {selectShopItem} from '../../Redux/shop/shop..selector';
import CollectionItem from '../../components/collection-item/collection-item.component'



const CollectionPage=({collection})=>{
  const{title,items}=collection;
    return (
    
    <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
        {
            items.map(item=>(
                  <CollectionItem key={item.id} item={item}/>
            ))
        }
    </div>
    
</div>)



}

const mapStateToProps=(state,ownProps)=>({
     collection:selectShopItem(ownProps.match.params.collectionID)(state)
})
export default connect(mapStateToProps)(CollectionPage);
