import { SOCIAL_LOGIN_SUCCESS,SOCIAL_LOGIN_USER_ERROR,SET_USER,LOGOUT_USER } from "../actions/reducerTypes";

type InitialStateType={
    loginStatus:boolean,
    user:Object,
    error:boolean
} 

const initialState:InitialStateType={
    loginStatus:false,
    user:{},
    error:false
}
type ActionType={
    type:string
    payload:Object
}
const authReduer= (state:InitialStateType=initialState,action:ActionType)=>{
    switch(action.type){
        case SOCIAL_LOGIN_SUCCESS:
            return{
                ...state,loginStatus:true,
                error:false
            }
        case SOCIAL_LOGIN_USER_ERROR:
            return{
                ...state,
                loginStatus:false,
                user:{},
                error:true
            }
        case SET_USER:
            return{
                ...state,
                loginStatus:true,
                user:action.payload,
                error:false
            }
        case LOGOUT_USER:
            return {
                ...state,
                loginStatus:false,
                user:{},
                error:false
            }
        default:
            return state;
    }

}
export default authReduer;