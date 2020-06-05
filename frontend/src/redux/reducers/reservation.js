const ReservationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ALL_RESERVATIONS':
            return {
                ...state,
                reservations: action.reservations
            }
            
            case 'CLEAR':
                return{
                    state: undefined
                        }
        default:
            return state;
    }
};
export default ReservationReducer;