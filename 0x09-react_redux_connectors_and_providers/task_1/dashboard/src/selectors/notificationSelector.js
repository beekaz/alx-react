import { createSelector } from 'reselect';

// Input selectors
const getNotificationsState = (state) => state.notifications;
const getFilterState = (state) => state.filter;

// Selector for the filter
export const filterTypeSelected = createSelector(
    getFilterState,
    (filterState) => filterState
);

// Selector for the notifications
export const getNotifications = createSelector(
    getNotificationsState,
    (notificationsState) => new Map(Object.entries(notificationsState))
);

// Selector for the unread notifications
export const getUnreadNotifications = createSelector(
    getNotificationsState,
    (notificationsState) => {
        const unreadNotifications = Object.entries(notificationsState)
            .filter(([id, notification]) => !notification.isRead)
            .reduce((acc, [id, notification]) => {
                acc[id] = notification;
                return acc;
            }, {});
        return new Map(Object.entries(unreadNotifications));
    }
);