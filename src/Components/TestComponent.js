import React, { useContext } from 'react'
import { NotificationContext } from './NotificationContext';

export default function TestComponent({msg}) {
  const { addNotification } = useContext(NotificationContext);

  const handleButtonClick = () => {
    addNotification({ id: 1, message: msg || 'This is a notification' });
  };

  return (
    <div>
      <div>
        <button onClick={handleButtonClick}>Add Notification</button>
        
      </div>
    </div>
  )
}
