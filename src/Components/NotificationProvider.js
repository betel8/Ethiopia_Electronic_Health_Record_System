import { useEffect, useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({children}) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let t = null;
    if(notifications.length) {
      t = setInterval(() => {
        if(notifications.length)
          setNotifications(prev => {
            const [firstElem, ...newArray] = prev;
            return newArray
          })
      },3000)
    }

    return () => clearInterval(t);
  },[notifications])

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((n) => n.id !== id));
  };

  const contextValue = {
    notifications,
    addNotification,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      <div className="tw-fixed tw-bottom-0 tw-left-0 tw-z-[999]">
        {notifications.map((notification,i) => (
          <div key={i}
            className="tw-bg-gray-800 tw-text-white tw-rounded-lg tw-shadow-lg tw-m-2 tw-p-2"
          >{notification.message}</div>
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  )
}