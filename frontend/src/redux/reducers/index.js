import { combineReducers } from "redux";

import user from './user'

import rooms from './room'


import provincias from './location'


import reservations from './reservation'


const reducer = combineReducers({
    user,

    provincias,

    rooms,

    reservations
})
export default reducer;