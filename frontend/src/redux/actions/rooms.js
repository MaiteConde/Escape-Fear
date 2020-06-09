
import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';
import { getInfo } from './users';

export const getAllRooms = async () => {
    try {
        const res = await axios.get(API_URL + 'rooms');
        store.dispatch({
            type: 'ALL_ROOMS',
            rooms:res.data
        })
       
    return res;
    } catch (error) {
        console.error(error)
    }
}

export const getRoomById = async (id) => {
    const res = await axios.get(API_URL + `rooms/${id}`, {
        headers: {
            Authorization: localStorage.getItem('authToken')
        }
    }) 
    store.dispatch({
        type: 'GET_ROOM_ID',
        room:res.data
    })
return res;
}

export const editRoom = async (room, id) => {
    await axios.put(API_URL + `rooms/${id}`, room, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
          } 
      }) 
    // return getAllRooms();
   
      }

      export const postRoom = async (formData) => {
        await axios.post(API_URL + 'rooms',formData, {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('authToken')
              } 
          }) 
      
       
          }

          export const editRoomPhoto = async (formData, id) => {
             
            await axios.post(API_URL +`rooms/image/${id}`, formData, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authToken')
                  }
              }) 
        
           
              }

      export const deleteRoom = async (id) => {
        try {
          await axios.delete(API_URL + `rooms/${id}`,{
                headers: {
                    Authorization: 'Bearer '+ localStorage.getItem('authToken')
                }
            })  
         getAllRooms()
        } catch (error) {
            console.error(error)
        }
      
           }

export const totalPrice = async (value) => {
    store.dispatch({
        type: 'TOTAL_PRICE',
        payload: value
      
    })

  };
  export const roomid = async (id) => {
    store.dispatch({
        type: 'ID',
        payload: id
      
    })

  };

  export const ReserHour = async (value) => {
    store.dispatch({
        type: 'HOUR',
        payload: value
      
    })

  };



  export const reservDate = async (selectedValue) => {
    store.dispatch({
        type: 'RESER_DATE',
        payload: selectedValue
      
    })
}; 