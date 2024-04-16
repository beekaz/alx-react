import React from 'react'
import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
import NotificationItem from './NotificationItem'

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: props.displayDrawer || false
    };
    this.log = this.log.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  log() {
    console.log('Close button has been clicked');
  }

  render() {
    const style = {
      position: "absolute",
      right: ".25rem",
      top: ".25rem",
      background: "transparent",
      border: "none",
    };

    return (
      <>
        <div className='menuItem'>
          <p>Your notifications</p>
        </div>
        {this.state.displayDrawer &&
          <div className='Notifications' style={{ position: "relative" }}>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem data-testid="child" type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification} />
            </ul>
            <button aria-label='Close' onClick={this.log} style={style}>x</button>
          </div>
        }
      </>
    );
  }
}
export default Notifications;