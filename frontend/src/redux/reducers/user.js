const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
            return {
                ...state,
                user: action.user
            }
            case 'ALL_USERS':
                return {
                    ...state,
                    users: action.payload
                }
                case 'SEARCH_USERS':
                return {
                    ...state,
                    userSearch: action.payload
                }
            case 'GET_INFO':
                return {
                    ...state,
                    myUser: action.payload
                }
            case 'GET_INFO_ID':
                return {
                    ...state,
                    userId: action.user
                }
              
            case 'CLEAR':
                return{
                    state: undefined
                        }
        default:
            return state;
    }
};
export default userReducer;