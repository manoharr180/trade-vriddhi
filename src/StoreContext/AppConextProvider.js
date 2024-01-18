import { createContext, useEffect, useReducer } from "react";
import { profileReducer } from "../reducers/profileReducer";
import { Dispatch_Action_Get_Profile_Request, getProfileAction, requestData } from "../actions/profileaction";
import { loginPath } from "../../services/services";
import { postApi } from "../../services/storeService";


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

    useEffect(()=>{
        console.log(profile)
    })
    const addValue = async () =>{
 
        let profileModal = {
            mailId:'userName',
            Password:'password',
            PhoneNumber:'9901351374'
        }

        const data = await postApi(loginPath,profileModal) 
        dispatch(getProfileAction(data))
    }

    return <AppStoreConext.Provider value={{data: profile, addValue} }>
        {children}
    </AppStoreConext.Provider>
 } 

 export default AppStoreConext


