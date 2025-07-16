import { useContext } from 'react';
import NotificationContext from '../store/NotificationContext.jsx';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
          onClick={() => removeNotification(notification.id)}
        >
          <div className="notification-content">
            {notification.icon && <span className="notification-icon">{notification.icon}</span>}
            <div className="notification-text">
              {notification.title && <h4>{notification.title}</h4>}
              <p>{notification.message}</p>
            </div>
          </div>
          <button 
            className="notification-close"
            onClick={(e) => {
              e.stopPropagation();
              removeNotification(notification.id);
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
