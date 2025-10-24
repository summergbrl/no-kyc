import React from 'react'
import { FaTwitter, FaTelegramPlane, FaDiscord, FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiLitecoin, SiTether, SiMonero } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <span>no</span>
              </div>
              <div className="logo-text">
                <span className="kyc-text">KYC</span>
                <span className="casino-text">Casino</span>
              </div>
            </div>
            <p className="footer-description">
              Play anonymous. Win big. Withdraw instantly. Your privacy is our priority.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-link" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a href="#" className="social-link" aria-label="Discord">
                <FaDiscord />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Casino</h4>
            <ul className="footer-links">
              <li><a href="#slots">Slots</a></li>
              <li><a href="#live-casino">Live Casino</a></li>
              <li><a href="#table-games">Table Games</a></li>
              <li><a href="#jackpots">Jackpots</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#how-to-play">How to Play</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Crypto</h4>
            <ul className="footer-links">
              <li><a href="#bitcoin">Bitcoin (BTC)</a></li>
              <li><a href="#ethereum">Ethereum (ETH)</a></li>
              <li><a href="#usdt">Tether (USDT)</a></li>
              <li><a href="#more-crypto">More Cryptocurrencies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-methods">
            <span className="payment-icon"><FaBitcoin /></span>
            <span className="payment-icon"><FaEthereum /></span>
            <span className="payment-icon"><SiTether /></span>
            <span className="payment-icon"><SiLitecoin /></span>
            <span className="payment-icon"><SiMonero /></span>
          </div>
          <p className="copyright">
            © 2025 No-KYC Casino. All rights reserved. Play responsibly.
          </p>
          <p className="footer-notice">
            18+ Only. Gambling can be addictive. Please play responsibly and within your means.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


