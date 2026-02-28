import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Підвал сторінки (Footer).
 * * Містить інформацію про авторські права, поточний рік (генерується автоматично) 
 * та навігаційне посилання на сторінку політики конфіденційності.
 * * @component
 * @requires react-router-dom/Link - для внутрішньої навігації без перезавантаження.
 * @returns {JSX.Element} Контейнер з копірайтом та правовою інформацією.
 */
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