import React from 'react';

export default function NotificationItem({type, value, html = null}) {
    return (
        <>
            {
                html ? (
                    <li data-priority={type} dangerouslySetInnerHTML={{ __html: html() }}></li>
                ) : (
                    <li data-priority={type}>{value}</li>)
            }
        </>
    )
}
