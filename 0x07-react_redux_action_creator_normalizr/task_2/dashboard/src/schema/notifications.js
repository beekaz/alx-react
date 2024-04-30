import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export const normalizedData = normalize(notificationItem.default, [notification])


export const getAllNotificationsByUser = (userId) => {

    const Notification = normalizedData.entities.notifications;
    const Message = normalizedData.entities.messages;
    const data = [];

    for (const item of Notification) {
        if (item.author === userId) {
            const contextMessage = item.context;
            data.push(Message[contextMessage])
        }
    }
    return data;
};
