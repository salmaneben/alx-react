import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #e0354b',
    padding: '5px',
    position: 'absolute',
    right: '1em',
    width: '30%',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: '20px',
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
  },
  menuItem: {
    textAlign: 'right',
    paddingRight: '1em'
  },
  notificationsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  closeIcon: {
    width: '15px',
    height: '15px'
  },
  defaultNotification: {
    color: 'blue'
  },
  urgentNotification: {
    color: 'red'
  }
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer
    } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <div className={css(styles.notificationsHeader)}>
              <p>Here is the list of notifications</p>
              <button
                className={css(styles.closeButton)}
                aria-label="Close"
                onClick={handleHideDrawer}
              >
                <img
                  src={closeIcon}
                  alt="Close"
                  className={css(styles.closeIcon)}
                />
              </button>
            </div>
            <ul>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  value="No new notification for now"
                  type="default"
                />
              ) : (
                listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    id={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

export default Notifications;