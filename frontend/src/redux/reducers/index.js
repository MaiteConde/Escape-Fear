import { combineReducers } from "redux";

import user from './user'

import rooms from './room'


import provincias from './location'


const reducer = combineReducers({
    user,

    provincias,

    rooms
})
export default reducer;