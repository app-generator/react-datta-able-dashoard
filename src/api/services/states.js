import  apiInstance  from "../api";
import { COMPONENT_URL } from '../../config/constant';

const getStates = (page="") => {//el parametro es para completar la url con el numero de pagina
    
    return apiInstance.get(COMPONENT_URL.state+page);
}

const getAllStates = (currentPage = 1, results = [], limit = 100) => {
            
    return apiInstance.get(COMPONENT_URL.state, { params: { page: currentPage, page_size: limit } })       
        .then((response) => {
            let res = [...results, ...response.data.results]                                    
            if(response.data.next != undefined){                                
                return getAllStates(++currentPage, res, limit)
            }
            else{
                return res;     
            }                  
        })
        .catch((error) => {
            return Promise.reject(error);            
        })   

}

const postState = ( slug,name,attended,solved,active,description,children) => {   
    return apiInstance.post(COMPONENT_URL.state, {
        slug:slug ,
        name: name,
        attended: attended,
        solved:solved,
        active:active,
        description:description,
        children:children 
    });  
}
const putState = ( url,slug,name,attended,solved,active,description,children) => {
    return apiInstance.put(url, {
        slug:slug ,
        name: name,
        attended: attended,
        solved:solved,
        active:active,
        description:description,
        children:children 
        
    });
}

const deleteState = ( url) => {
    return apiInstance.delete(url);
}

const isActive = (url, active) =>{
    return apiInstance.patch(url, {
        active: active
    } );
}
export { getStates, getAllStates, postState, putState, deleteState, isActive }