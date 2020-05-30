const roomReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ALL_ROOMS':
            return {
                ...state,
                rooms: action.rooms
            }
            case 'GET_ROOM_ID':
                return {
                    ...state,
                    roomId: action.room
                }

                case 'TOTAL_PRICE':
                    return {
                        ...state,
                        price: action.payload
                    }
                    
                case 'RESER_DATE':
                    return {
                        ...state,
                        date: action.payload
                    }
              
            case 'CLEAR':
                return{
                    state: undefined
                        }
        default:
            return state;
    }
};
export default roomReducer;