import { combineReducers } from "redux";

import user from './user'

import provincias from './location'


const reducer = combineReducers({
    user,

    provincias
})
export default reducer;