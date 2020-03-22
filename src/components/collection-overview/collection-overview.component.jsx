import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import {selectShopItems} from '../../Redux/shop/shop..selector';
import Collectionpreview from '../collection-preview/collection-preview.component';

import {CollectionArray} from '../../Redux/shop/shop..selector';



const CollectionOverview= ({collections}) => (
    <div className='collections-overview'>
    {
        collections.map(({id,...otherParams})=>(
            <Collectionpreview key={id} {...otherParams}/>
        ))
    }
</div>
)
const mapStateToProps=createStructuredSelector({ 
    collections:CollectionArray
})

export default connect(mapStateToProps)(CollectionOverview);

