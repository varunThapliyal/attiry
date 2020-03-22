import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

import rootReducer from '../root-reducer';


const middlewares=[logger];

export const Store=createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor=persistStore(Store)

export default {Store,persistor};