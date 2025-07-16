import { createContext, useState, useCallback } from 'react';

const NotificationContext = createContext({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
});

export function NotificationContextProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now().toString();
    const newNotification = {
      id,
      type: 'info', // info, success, warning, error
      duration: 5000,
      ...notification,
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto remove notification after duration
    setTimeout(() => {
      removeNotification(id);
    }, newNotification.duration);

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{
      notifications,
      addNotification,
      removeNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
