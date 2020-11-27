export const getCalendarDataSelector = (state) => state.calendar.data;

export const getCalendarDataItemSelector = (state, id) => state.calendar.currentItem;

export const getIsEditPageSelector = (state) => state.calendar.isEditPage;
