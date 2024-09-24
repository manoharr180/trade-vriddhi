import services from "./services"

export const fetchApi = async (path) =>{
    try{
        const response =  await services.get(path,
            {
                'Content-Type':'application/json',
                'Response-Type':'application/json'
            })
        .then((respose) => 
        {
            return respose
        })
        return response.data
    }
    catch(error){
        console.log(error.toString())
    }
    
}

export const postApi = async (path,body) =>{
    try{
        
        const response =  await services.post(path,body,
            {
                headers:{
                'Content-Type':'application/json',
                'Response-Type':'application/json',
            },
                
            },
            )
        .then((respose) => 
        {
            return respose
        })
        return response.data
    }
    catch(error){
        console.log(error.toString())
    }
}