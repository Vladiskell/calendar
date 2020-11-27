import * as types from './constants';
import { nanoid } from 'nanoid';

export const setCurrentCalendarDataItem = (gridPosition) => ({
    type: types.SET_CURRENT_CALENDAR_DATA_ITEM,
    payload: { id: nanoid(), text: nanoid(), gridPosition }
});

export const clearCurrentCalendarDataItem = () => ({
    type: types.CLEAR_CURRENT_CALENDAR_DATA_ITEM,
})

export const addCalendarDataItem = (data) => ({
    type: types.ADD_CALENDAR_DATA_ITEM,
    payload: { data }
});

export const openEditPageAction = (isEditPage) => ({
    type: types.OPEN_EDIT_PAGE,
    payload: { isEditPage }
});

