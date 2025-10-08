import React from 'react'

export default function Button({ children, onClick, size = 'md', ...rest }) {
  return (
    <button className={`btn btn-${size}`} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}