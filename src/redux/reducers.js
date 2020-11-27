import * as types from './constants';
import { combineReducers } from 'redux';

// ---------------------------------------------------------------------------------------------------------------------
const initialState = {
    data: [],
    isEditPage: false,
    currentItem: null,
};

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_EDIT_PAGE:
            return {
                ...state,
                isEditPage: action.payload.isEditPage,
            };
        case types.SET_CURRENT_CALENDAR_DATA_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case types.SET_CURRENT_CALENDAR_DATA_ITEM:
            return {
                ...state,
                currentItem: initialState.currentItem,
            }
        case types.ADD_CALENDAR_DATA_ITEM: {
            return {
                ...state,
                data: [...state.data, action.payload.data],
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
