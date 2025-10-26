import React from 'react'
import { motion } from 'framer-motion'
import { IoSearchSharp, IoMenuSharp } from 'react-icons/io5'
import './TopBar.css'

const TopBar = ({ onMenuClick }) => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        {/* Hamburger Menu for Mobile */}
        <motion.button 
          className="menu-button"
          onClick={onMenuClick}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <IoMenuSharp />
        </motion.button>

        {/* Logo for Mobile */}
        <div className="topbar-logo-mobile">
          <img src="/logo.png" alt="No-KYC Casino" className="logo-mobile-img" />
          <span>KYC</span>
        </div>

        {/* Search */}
        <div className="topbar-search">
          <IoSearchSharp className="search-icon" />
          <input 
            type="text" 
            placeholder="Games, Categories, Providers..." 
            className="search-input"
          />
        </div>

        {/* Action Buttons */}
        <div className="topbar-actions">
          <motion.button 
            className="btn btn-topbar btn-login"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOG IN
          </motion.button>
          <motion.button 
            className="btn btn-topbar btn-register"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default TopBar

