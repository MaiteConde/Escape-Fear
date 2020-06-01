import { combineReducers } from "redux";

import user from './user'

import rooms from './room'


import provincias from './location'


import reservations from './reservation'

import assessments from './assessment'



const reducer = combineReducers({
    user,

    provincias,

    rooms,

    reservations,

    assessments
})
export default reducer;