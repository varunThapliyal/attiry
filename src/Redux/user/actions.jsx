import {User_Types} from './user.types';
export const setCurrentUser= user =>(
    {
        type:User_Types.SET_CURRENT_USER,
        payload:user
    }
)