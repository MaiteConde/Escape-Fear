import store from '../store';
import axios from 'axios';
import { API_URL } from '../../api-config';

export const createReservation = async (reservation, id) => {
    await axios.post(API_URL + `reservations/${id}`, reservation, {
          headers: {
              Authorization: 'Bearer '+ localStorage.getItem('authToken')
          }
      }) 
    return reservation;
   
      }