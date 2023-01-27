import React from 'react';
import styles from '../../Styles/StylesForms/Button.module.css';

const Button = ({ children, props }) => {
  return (
    <button className={`${styles.button}`} {...props}>
      {children}
    </button>
  )
}

export default Button;
