
import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

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