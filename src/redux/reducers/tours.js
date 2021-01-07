
const toursReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TOUR':
            return [
                ...state,
                action.tour
            ]
        case 'DELETE_TOUR':
            const newArray = state.filter(item => item.id !== action.tour)
            return[
                ...newArray
            ]
        default:
            return state
    }
}

export default toursReducer;