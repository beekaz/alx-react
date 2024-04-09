import React from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }




    render() {
        const { type, value, html = null, id } = this.props;

        return (
            <>
                {
                    html ? (
                        <li data-priority={type} dangerouslySetInnerHTML={{ __html: html() }} onClick={() => this.markAsRead(id)}></li>
                    ) : (
                        <li data-priority={type} onClick={() => this.markAsRead(id)}>{value}</li>
                    )
                }
            </>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.func,
    id: PropTypes.number
};

NotificationItem.defaultProps = {
    type: 'default',
};

export default NotificationItem;