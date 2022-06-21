import * as Actions from "./action";
import initialState from "../store/initialState";
export const FavourotesReducer = (state = initialState.favourites, action) => {
  switch (action.type) {
    case Actions.ADD_FAVOURITES:
      return {
        ...state,
        list: action.list,
      };
    case Actions.FETCH_FAVOURITES:
      return {
        ...state,
        list: action.list,
      };
    case Actions.DELETE_FAVOURITES:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};