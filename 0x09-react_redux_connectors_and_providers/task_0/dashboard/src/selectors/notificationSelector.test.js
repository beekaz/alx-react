import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
    const state = {
        filter: 'DEFAULT',
        notifications: {
            1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
            2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        },
    };

    test('filterTypeSelected returns the filter type', () => {
        expect(filterTypeSelected(state)).toEqual('DEFAULT');
    });

    test('getNotifications returns a Map of notifications', () => {
        const expected = new Map(Object.entries(state.notifications));
        expect(getNotifications(state)).toEqual(expected);
    });

    test('getUnreadNotifications returns a Map of unread notifications', () => {
        const expected = new Map(Object.entries({
            1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        }));
        expect(getUnreadNotifications(state)).toEqual(expected);
    });
});