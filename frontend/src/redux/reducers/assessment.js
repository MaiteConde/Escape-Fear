const assessmentReducer = (state = {}, action) => {
    switch (action.type) {
       
                case 'ASSESSMENTS':
                    return {
                        ...state,
                        assessments: action.payload
                    }
              
            case 'CLEAR':
                return{
                    state: undefined
                        }
        default:
            return state;
    }
};
export default assessmentReducer;