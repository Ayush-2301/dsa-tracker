import { AppDispatch } from "../store";
import { SOCIAL_LOGIN_USER_ERROR,SOCIAL_LOGIN_SUCCESS,SET_USER,LOGOUT_USER } from "./reducerTypes";
import { AuthError, Session } from "@supabase/supabase-js";

export const socialLogin = ({error}:{error:AuthError|null})=> async(dispatch:AppDispatch)=>{
    if(error === null ){
        dispatch({type:SOCIAL_LOGIN_SUCCESS})
    }else{
        dispatch({type:SOCIAL_LOGIN_USER_ERROR})
        console.log(error)
    }
}

export const setUserData=({session}: {session: Session | null})=>(dispatch:AppDispatch)=>{
    if(session!==null){
        dispatch({type:SET_USER, payload:session.user.user_metadata})
    }
}

export const logout=()=>async(dispatch:AppDispatch)=>{
        dispatch({type:LOGOUT_USER})
}