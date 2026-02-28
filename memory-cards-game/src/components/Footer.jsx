import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Memory Cards Game | Student Project</p>
        <div style={{fontSize: '0.85rem', marginTop: '0.5rem'}}>
            <Link to="/privacy" style={{color: '#ccc', textDecoration: 'underline'}}>
                Політика конфіденційності
            </Link>
        </div>
      </div>
    </footer>
  )
}