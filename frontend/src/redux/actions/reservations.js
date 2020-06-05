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

      
      export const getAllReservations = async () => {
        try {
            const res = await axios.get(API_URL + 'reservations', {
                headers: {
                    Authorization: 'Bearer '+ localStorage.getItem('authToken')
                }
            } );
            store.dispatch({
                type: 'ALL_RESERVATIONS',
                reservations:res.data
            })
           
        return res;
        } catch (error) {
            console.error(error)
        }
    }


      export const deleteReservation = async (id) => {
        
       const res = await axios.delete(API_URL + `reservations/${id}`,{
              headers: {
                  Authorization: 'Bearer '+ localStorage.getItem('authToken')
              }
          }) 
return res.data.message
       
          }