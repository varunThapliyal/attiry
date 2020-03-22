import {User_Types} from './user.types';
const Initial_State={
    currentUser:null
}
const UserReducer= (state=Initial_State,action) => {
    switch(action.type){
        case User_Types.SET_CURRENT_USER:
              return{
                  ...state,
                  currentUser:action.payload
              }

              default: return state;
    }

}
export default UserReducer;