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