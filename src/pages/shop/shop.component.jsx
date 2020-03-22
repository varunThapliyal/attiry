import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

import CollectionPage from '../collection/collection.component';
const shop=({match}) =>(
           
    <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:collectionID`} component={CollectionPage}/>
    </div>
)



export default shop;
