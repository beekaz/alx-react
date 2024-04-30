import * as notificationItem from "../../notifications.json";


export function getAllNotificationsByUser(userId) {
    return notificationItem.filter((user) => userId == user.author.id).map((user) => user.context)
}