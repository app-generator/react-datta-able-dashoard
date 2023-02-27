import apiInstance from "../api";
import { API_SERVER,COMPONENT_URL } from '../../config/constant';

const getUsers = (page="") => {//el parametro es para completar la url con el numero de pagina
    
    return apiInstance.get(COMPONENT_URL.user+page);
}

const getUser = (url) => { 
    return apiInstance.get(url);
}

const postUser = (username, first_name, last_name, email, priority, is_active) => {

    console.log(first_name)
    return apiInstance.post(COMPONENT_URL.user, {
        username: username, 
        first_name: first_name, 
        last_name: last_name, 
        email: email, 
        priority: priority,
        is_active: is_active
    });
}

const putUser = ( url,username, first_name, last_name, email, priority, is_active) => {
    return apiInstance.put(url, {
        username: username, 
        first_name: first_name, 
        last_name: last_name, 
        email: email, 
        priority: priority,
        is_active: is_active
    });
}

const isActive = (url, active) => {
    return apiInstance.patch(url, {
        is_active: active
    } );
}

const deleteUser = (url) => {
    return apiInstance.delete(url);
}

export { getUsers, getUser, postUser, putUser, deleteUser, isActive };
