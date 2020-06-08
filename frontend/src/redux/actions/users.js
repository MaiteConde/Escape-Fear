
import store from '../store';
import axios from 'axios';
import { notification } from 'antd';

import { API_URL } from '../../api-config';
import { getAllRooms } from './rooms';

export const login = async(user) => {
    try {
        const res = await axios.post(API_URL + 'users/login', user)
        store.dispatch({
            type: 'LOGIN',
            user: res.data[0]
        })
        localStorage.setItem('authToken', res.data[1]);
        notification.success({ message: 'Connected successfully', description: 'Welcome' })
            return res;
    } catch (error) {
        console.error(error)
        notification.error({ message: 'Failed connection', description: 'Incorrect User or Password' })
    }
}

export const register = async(user) => {
    return axios.post(API_URL + 'users/register', user)
}

export const logout = async() => {
    await axios.get(API_URL + 'users/logout', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT'
    })
 
}

export const getInfo = async () => {
    const res = await axios.get(API_URL + 'users/info', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    }) 
    store.dispatch({
        type: 'GET_INFO',
        payload:res.data
    })
return res;
}

export const getAllUsers = async () => {
    const res = await axios.get(API_URL + 'users', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    }) 
    store.dispatch({
        type: 'ALL_USERS',
        payload:res.data
    })
return res;
}

export const SearchUsers = async (search) => {
    const res = await axios.get(API_URL + `users/search/${search}`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    }) 
    store.dispatch({
        type: 'SEARCH_USERS',
        payload:res.data
    })
return res;
}


export const editProfile = async (user) => {
    await axios.put(API_URL + 'users/update', user, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
          }
      }) 
    return getInfo();
   
      }

export const editProfilePhoto = async (formData) => {
        await axios.post(API_URL + 'users/image', formData, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
              }
          }) 
        return getInfo();
       
          }


          export const deleteUser = async (id) => {
            try {
              await axios.delete(API_URL + `users/${id}`,{
                    headers: {
                        Authorization: 'Bearer '+ localStorage.getItem('authToken')
                    }
                })  
             getAllRooms()
             getAllUsers()
            } catch (error) {
                console.error(error)
            }
          
               }
               export const restoreUser = async (id) => {
                try {
                  await axios.get(API_URL + `users/restore/${id}`,{
                        headers: {
                            Authorization: 'Bearer '+ localStorage.getItem('authToken')
                        }
                    })  
                 getAllRooms()
                 getAllUsers()
                } catch (error) {
                    console.error(error)
                    getAllRooms()
                    getAllUsers()
                }
              
                   }
    


    
      export const clearData = () => {
        store.dispatch({
            type: 'CLEAR'
          
        })
      };
