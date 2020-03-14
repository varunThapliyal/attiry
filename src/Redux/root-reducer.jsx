import {combineReducers} from 'redux';
import UserReducer from '../Redux/user/user-reducer';


export default combineReducers(
    {
        user:UserReducer
    }
)

