import { createContext, useEffect, useReducer } from "react";
import { profileReducer } from "../reducers/profileReducer";
import { getProfileAction } from "../actions/profileaction";


const initialState = {
    token:'',
    userInfo : {
        bloodGroup:'',
        fName:'',
        lName:'',
        mailId:'',
        phoneNumber:'',
        profileId:0,
        userName:''
    }
}
 const AppStoreConext = createContext([]);

 export const AppProvider = ({children}) =>{

    const [profile, dispatch] = useReducer(profileReducer,initialState)

    const addValue = async (data) =>{
        dispatch(getProfileAction(data))
    }

    return <AppStoreConext.Provider value={{data: profile, addValue} }>
        {children}
    </AppStoreConext.Provider>
 } 

 export default AppStoreConext


