import React, { useEffect, useRef } from 'react';
import styles from './styles/Wrap.css';
const Wrap = ({
  children,
  space = '64px',
  runSpace = '0px',
  marginTop = '0px',
}) => {
  const wrapRef = useRef(null);
  useEffect(() => {
    if (space !== '64px' && wrapRef) {
      Array(children.length)
        .fill(0)
        .forEach((item, index) => {
          wrapRef.current.children[index].style.marginRight = space;
          wrapRef.current.children[index].style.marginTop = runSpace;
        });
    }
  }, []);
  return (
    <div className={styles.wrap} style={{ marginTop }} ref={wrapRef}>
      {children}
    </div>
  );
};

export default Wrap;
