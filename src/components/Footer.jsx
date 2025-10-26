import React from 'react'
import { FaTwitter, FaTelegramPlane, FaDiscord, FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiLitecoin, SiTether, SiMonero } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* SEO Content Section */}
        <div className="footer-seo">
          <h2 className="seo-title">Play Anonymous With No-KYC Casino for UAE Players 2025</h2>
          <p className="seo-description">
            Welcome to the world of anonymous crypto gaming. We're a no-KYC casino, which means you can play, win, and withdraw without ever showing us your ID. No passport scans. No utility bills. No waiting for verification approval. Register with just an email address, deposit crypto, and start playing immediately. Your privacy matters to us.
          </p>
          
          <div className="seo-features">
            <div className="seo-feature">
              <h3>🔒 Complete Privacy</h3>
              <p>Your wallet address is your identity. We never collect personal documents or government IDs.</p>
            </div>
            <div className="seo-feature">
              <h3>⚡ Instant Access</h3>
              <p>Register and play within minutes. No document upload queues or verification delays.</p>
            </div>
            <div className="seo-feature">
              <h3>💰 Fast Withdrawals</h3>
              <p>Process withdrawals in 15-30 minutes. Cryptocurrency transactions at blockchain speeds.</p>
            </div>
            <div className="seo-feature">
              <h3>🌐 VPN Friendly</h3>
              <p>Access from anywhere. We don't restrict based on location or IP addresses.</p>
            </div>
          </div>

          <div className="seo-crypto">
            <h3>Supported Cryptocurrencies</h3>
            <p>Bitcoin (BTC) • Ethereum (ETH) • Litecoin (LTC) • USDT (Tether) • Monero (XMR)</p>
          </div>
        </div>

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
              <li><a href="#sports">Sports Betting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Information</h4>
            <ul className="footer-links">
              <li><a href="#about">About No-KYC</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#responsible-gaming">Responsible Gaming</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#vip">VIP Program</a></li>
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
            <strong>Important Notice:</strong> Gambling should be entertainment, not income strategy. Only gamble with cryptocurrency you can afford to lose. Understand local laws and tax obligations in your jurisdiction. 18+ Only.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


