import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  IoHomeSharp, IoCashSharp, IoTrophySharp, IoGameControllerSharp,
  IoTvSharp, IoDiamondSharp, IoFootballSharp, IoBasketballSharp,
  IoGridSharp, IoRibbonSharp, IoGiftSharp, IoWalletSharp,
  IoStorefrontSharp, IoStarSharp, IoChevronForwardSharp
} from 'react-icons/io5'
import './Sidebar.css'

const menuItems = [
  { id: 'bonus', label: 'BONUS', icon: IoGiftSharp, highlight: true },
  { id: 'promotions', label: 'PROMOTIONS', icon: IoRibbonSharp },
  { id: 'home', label: 'HOME', icon: IoHomeSharp, active: true },
  { id: 'casino', label: 'CASINO', icon: IoDiamondSharp },
  { id: 'live-casino', label: 'LIVE CASINO', icon: IoTvSharp },
  { id: 'jackpots', label: 'JACKPOTS', icon: IoCashSharp },
  { id: 'sports', label: 'SPORTS', icon: IoFootballSharp },
  { id: 'live-betting', label: 'LIVE BETTING', icon: IoBasketballSharp },
  { id: 'virtual-sports', label: 'VIRTUAL SPORTS', icon: IoGridSharp },
  { id: 'challenges', label: 'CHALLENGES', icon: IoStarSharp },
  { id: 'tournaments', label: 'TOURNAMENTS', icon: IoTrophySharp },
  { id: 'bonus-grab', label: 'BONUS GRAB', icon: IoGiftSharp },
  { id: 'wheel', label: 'WHEEL OF FORTUNE', icon: IoGameControllerSharp },
  { id: 'shop', label: 'SHOP', icon: IoStorefrontSharp },
  { id: 'vip', label: 'VIP LEVELS', icon: IoDiamondSharp }
]

const Sidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (id) => {
    setActiveItem(id)
    // Close sidebar on mobile when item is clicked
    if (window.innerWidth <= 768) {
      onClose()
    }
  }

  return (
    <aside 
      className={`sidebar ${isOpen ? 'mobile-open' : ''}`}
    >
      <div className="sidebar-content">
        {/* Logo */}
        <motion.div 
          className="sidebar-logo"
          whileHover={{ scale: 1.05 }}
        >
          <div className="logo-icon">
            <span>no</span>
          </div>
          <div className="logo-text">
            <span className="kyc-text">KYC</span>
            <span className="casino-text">Casino</span>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-item ${activeItem === item.id ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`}
              onClick={() => handleItemClick(item.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ x: 5 }}
            >
              <item.icon className="sidebar-icon" />
              <span className="sidebar-label">{item.label}</span>
              <IoChevronForwardSharp className="sidebar-arrow" />
            </motion.a>
          ))}
        </nav>

        {/* Language Selector at Bottom */}
        <div className="sidebar-footer">
          <div className="language-selector">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect fill='%23012169' width='60' height='30'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23fff' stroke-width='6'/%3E%3Cpath d='M0,0 L60,30 M60,0 L0,30' stroke='%23C8102E' stroke-width='4'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23fff' stroke-width='10'/%3E%3Cpath d='M30,0 L30,30 M0,15 L60,15' stroke='%23C8102E' stroke-width='6'/%3E%3C/svg%3E"
              alt="English"
              className="flag-icon"
            />
            <span>ENGLISH</span>
          </div>
          <a href="#help" className="help-link">HELP CENTRE</a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

