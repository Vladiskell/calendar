import * as types from './constants';
import { nanoid } from 'nanoid';

export const setCurrentGridItem = (rows, columns) => ({
    type: types.SET_CURRENT_GRID_ITEM,
    payload: { id: nanoid(), text: nanoid(), gridValues: { rows, columns } }
});

export const clearCurrentGridItem = () => ({
    type: types.CLEAR_CURRENT_GRID_ITEM,
})

export const addGridItem = (data) => ({
    type: types.ADD_GRID_ITEM,
    payload: { data }
});

export const openEditPageAction = (isEditPage) => ({
    type: types.OPEN_EDIT_PAGE,
    payload: { isEditPage }
});

