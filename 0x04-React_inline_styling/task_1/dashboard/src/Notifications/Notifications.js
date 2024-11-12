import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
            >
              <img 
                src={closeIcon} 
                alt="close icon" 
                className={css(styles.closeIcon)} 
              />
            </button>
            {listNotifications.length === 0 ? (
              <NotificationItem 
                type="default" 
                value="No new notification for now" 
              />
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsList)}>
                  {listNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

const fadeIn = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #e0354b',
    padding: '1rem',
    marginBottom: '1rem',
    position: 'absolute',
    right: '1rem',
    backgroundColor: 'white',
    "@media (max-width: 900px)": {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      zIndex: 999,
      backgroundColor: 'white',
      margin: 0,
      padding: '1rem',
    },
  },
  menuItem: {
    textAlign: 'right',
    paddingRight: '1rem',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  notificationsList: {
    listStyle: 'none',
    padding: 0,
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '15px',
    height: '15px',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;