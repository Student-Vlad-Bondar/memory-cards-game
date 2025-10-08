import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Memory Cards Game | Student Project</p>
      </div>
    </footer>
  )
}