import {combineReducers} from 'redux';
import UserReducer from '../Redux/user/user-reducer';
import CartReducer from '../Redux/cart/cart.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DirectoryReducer from './directory/directory.reducer';
import ShopReducer from './shop/shop.reducer';



const persistConfig={
    key:'root',
    storage,
    whiteList:['cart']
}

const rootReducer=combineReducers(
    {
        user:UserReducer,
        cart:CartReducer,
        directory:DirectoryReducer,
        shop:ShopReducer
    }
)
export default persistReducer(persistConfig,rootReducer);

