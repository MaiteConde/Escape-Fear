import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';
import { getInfo } from './users';

export const createReservation = async (reservation, id) => {
    await axios.post(API_URL + `reservations/${id}`, reservation, {
          headers: {
              Authorization: 'Bearer '+ localStorage.getItem('authToken')
          }
      }) 
    return reservation;
   
      }

      export const deleteReservation = async (id) => {
        
       const res = await axios.delete(API_URL + `reservations/${id}`,{
              headers: {
                  Authorization: 'Bearer '+ localStorage.getItem('authToken')
              }
          }) 
return res.data.message
       
          }