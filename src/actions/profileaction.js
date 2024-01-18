
export const Dispatch_Action_Get_Profile_Request = 'Get_Profile_Request'
export const Dispatch_Action_Get_Profile_Success = 'Get_Profile_Scuccess'
export const Dispatch_Action_Get_Profile_Failed = 'Get_Profile_Failed'

export const getProfileAction = (data) => {
   return {
    type:Dispatch_Action_Get_Profile_Request,
    payload:data
   }
}




    

