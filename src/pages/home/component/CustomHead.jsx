import React from 'react';
import styles from './styles/CustomHead.css';
const CustomHead = ({
  children,
  type = 'h1',
  color = '#4d4d4d',
  marginTop = '30px',
  fontSize = null,
}) => {
  return (
    <div className={styles[type]} style={{ color, marginTop, fontSize }}>
      {children}
    </div>
  );
};

export default CustomHead;
