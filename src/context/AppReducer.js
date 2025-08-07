export default (state, action) => {
    switch(action.type) {
        case 'DELETE_LOG':
            return {
                ...state,
                caloriesLog: state.caloriesLog.filter(calorieLog => calorieLog.id !==
                    action.payload
                )
            }
        case 'ADD_LOG':
            return {
                ...state,
                caloriesLog: [action.payload,...state.caloriesLog]
            }

        default:
            return state;
    }
}