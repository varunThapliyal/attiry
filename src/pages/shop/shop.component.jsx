import React from 'react';
import SHOP_DATA from './shop-data';
import Collectionpreview from '../../components/collection-preview/collection-preview.component.jsx';


class shop extends React.Component{

   constructor(props){
       super(props);
       this.state={
           collections:SHOP_DATA
       }
   }

   render(){
       const {collections}=this.state;
       console.log(collections);
       return (
           
               <div className='shop-page'>
                       {
                           collections.map(({id,...otherParams})=>(
                               <Collectionpreview key={id} {...otherParams}/>
                           ))
                       }
               </div>
       )
   }

}

export default shop;
