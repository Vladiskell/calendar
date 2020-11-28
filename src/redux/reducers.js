import * as types from './constants';
import { combineReducers } from 'redux';

// ---------------------------------------------------------------------------------------------------------------------
const initialState = {
    data: [],
    currentGridItem: null,
    isEditPage: false,
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_EDIT_PAGE:
            return {
                ...state,
                currentGridItem: initialState.currentGridItem,
                isEditPage: action.payload.isEditPage,
            };
        case types.SET_CURRENT_GRID_ITEM:
            return {
                ...state,
                currentGridItem: action.payload,
            }
        case types.ADD_GRID_ITEM: {
            return {
                ...state,
                data: [...state.data, action.payload.data],
            }
        }
        case types.CLEAR_CURRENT_GRID_ITEM: {
            return {
                ...state,
                currentGridItem: null,
            }
        }
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export default combineReducers({
    calendar: calendarReducer,
});
