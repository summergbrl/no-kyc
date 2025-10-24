import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
            <motion.a 
              href="/" 
              className="logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="logo-icon"
                animate={{ 
                  boxShadow: [
                    "0 4px 15px rgba(139, 92, 246, 0.3)",
                    "0 4px 25px rgba(139, 92, 246, 0.5)",
                    "0 4px 15px rgba(139, 92, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>no</span>
              </motion.div>
              <div className="logo-text">
                <span className="kyc-text">KYC</span>
                <span className="casino-text">Casino</span>
              </div>
            </motion.a>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <motion.a 
              href="#casino" 
              className="nav-link"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
            >
              Casino
            </motion.a>
            <motion.a 
              href="#live-casino" 
              className="nav-link"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
            >
              Live Casino
            </motion.a>
            <motion.a 
              href="#sports" 
              className="nav-link"
              whileHover={{ scale: 1.05, color: "#8b5cf6" }}
              whileTap={{ scale: 0.95 }}
            >
              Sports
            </motion.a>
          </nav>

          <div className="header-actions">
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, backgroundColor: "#2a2a2a" }}
              whileTap={{ scale: 0.95 }}
            >
              Log in
            </motion.button>
            <motion.button 
              className="btn btn-primary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 4px 15px rgba(139, 92, 246, 0.3)",
                  "0 6px 20px rgba(139, 92, 246, 0.4)",
                  "0 4px 15px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Register
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header


