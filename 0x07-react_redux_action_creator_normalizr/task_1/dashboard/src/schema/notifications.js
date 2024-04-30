import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';


export function getAllNotificationsByUser(userId) {
    return notificationItem.filter((user) => userId == user.author.id).map((user) => user.context)
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
    idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

export const normalizedData = normalize(notificationItem.default, [notification])