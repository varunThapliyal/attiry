import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';


const Collectionpreview = ({title,items}) => (
      
           <div className='collection-preview'>

                 <h1 className='title'>{title}</h1>
                 <div className='preview'>
                      {
                         items.filter((item,index) => index<4)
                         .map(({id,...otheritemParams})=>(
                         <CollectionItem key={id} {...otheritemParams}/>
                         ))
                      }
                 </div>

           </div>
)
export default Collectionpreview;