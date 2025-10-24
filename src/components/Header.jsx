import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-section">
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="/" className="logo">
              <div className="logo-icon">
                <span>no</span>
              </div>
              <div className="logo-text">
                <span className="kyc-text">KYC</span>
                <span className="casino-text">Casino</span>
              </div>
            </a>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#casino" className="nav-link">Casino</a>
            <a href="#live-casino" className="nav-link">Live Casino</a>
            <a href="#sports" className="nav-link">Sports</a>
          </nav>

          <div className="header-actions">
            <button className="btn btn-secondary">Log in</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


