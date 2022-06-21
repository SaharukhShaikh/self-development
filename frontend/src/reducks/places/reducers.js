import * as Actions from './action'
import  initialState from '../store/initialState'

export const PlacesReducer = (state = initialState.places, action) => {
    switch(action.type) {
        case Actions.ADD_PLACE:
            return {
                ...state,
                list: action.payload
            }
        case Actions.FETCH_PLACE:
            return {
                ...state,
                list: action.payload
            }
       
        default:
            return state
    }
}