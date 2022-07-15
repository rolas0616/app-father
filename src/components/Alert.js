import React, { useEffect } from 'react';
import { Message } from 'semantic-ui-react';

const Alert = ({ color = 'green', message, show = false }) => {
  return (
    <>
      {show && (
        <Message color={color} onDismiss={handleDismiss}>{message}</Message>
      )}
    </>
  );
};

export default Alert;
