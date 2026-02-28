import React from 'react'
import styles from './Button.module.css'

/**
 * Універсальний компонент кнопки.
 * @component
 * @name Button
 * @alias Button
 * @function
 * @param {Object} props - Пропси компонента.
 * @param {React.ReactNode} props.children - Вміст кнопки (текст або іконки).
 * @param {function} props.onClick - Функція, що викликається при натисканні.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Розмір кнопки, що відповідає класам у CSS модулі.
 * @param {Object} [props.rest] - Інші атрибути стандартної HTML кнопки.
 */
export default function Button({ children, onClick, size = 'md', ...rest }) {
  const sizeClass = styles[size] || styles.md;

  return (
    <button className={`${styles.button} ${sizeClass}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}