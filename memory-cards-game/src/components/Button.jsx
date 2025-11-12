import React from 'react'
import styles from './Button.module.css'

export default function Button({ children, onClick, size = 'md', ...rest }) {
  const sizeClass = styles[size] || styles.md;

  return (
    <button className={`${styles.button} ${sizeClass}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}