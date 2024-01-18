import { Dispatch_Action_Get_Profile_Request, getProfileAction } from "../actions/profileaction";



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

export const profileReducer = (state ,action) =>{

    console.log('action type=',action.type)
    switch (action.type){
        case Dispatch_Action_Get_Profile_Request:
            return { profile : action.payload}
        default: return state
    }
        

}