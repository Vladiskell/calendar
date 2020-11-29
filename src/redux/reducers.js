import * as types from './constants';
import { combineReducers } from 'redux';

// ---------------------------------------------------------------------------------------------------------------------
const initialState = {
    data: [],
    currentGridItem: null,
    isEditPage: false,
    isSelectedArea: false,
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_EDIT_PAGE:
            return {
                ...state,
                isEditPage: action.payload.isEditPage,
                currentGridItem: null,
                isSelectedArea: false,
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
        case types.RENDER_SELECTED_AREA:
            return {
                ...state,
                isSelectedArea: true,
            };
        default:
            return state
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export default combineReducers({
    calendar: calendarReducer,
});
