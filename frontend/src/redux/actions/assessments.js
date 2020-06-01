import store from '../store';
import axios from 'axios';
import {getRoomById} from './rooms'
import { API_URL } from '../../api-config';


export const getAllAssessments = async() => {
    const res = await axios.get(API_URL + 'assessments', { headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authToken')
      }}); 
    store.dispatch({
        type: 'ASSESSMENTS',
        payload:res.data
    })
return res;
}

export const createAssessment = async (assessment, id) => {
    await axios.post(API_URL + `assessments/${id}`, assessment, {
          headers: {
              Authorization: 'Bearer '+ localStorage.getItem('authToken')
          }
      }) 
    return getRoomById(id);
   
      }