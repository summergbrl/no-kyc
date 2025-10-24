import React from 'react'
import { motion } from 'framer-motion'
import { 
  IoLockClosedSharp, IoFlashSharp, IoCashSharp, IoGlobeSharp,
  IoShieldCheckmarkSharp, IoWalletSharp
} from 'react-icons/io5'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import './Features.css'

const Features = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="features-section">
      {/* Animated Crypto Background */}
      <div className="crypto-background">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-crypto"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {i % 5 === 0 && <FaBitcoin />}
            {i % 5 === 1 && <FaEthereum />}
            {i % 5 === 2 && '💲'}
            {i % 5 === 3 && 'Ł'}
            {i % 5 === 4 && 'ɱ'}
          </motion.div>
        ))}
      </div>

      <div className="container">
        
        {/* Main Feature Cards */}
        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="feature-card" variants={cardVariant} whileHover={{ y: -5 }}>
            <div className="feature-icon purple">
              <IoLockClosedSharp size={32} />
            </div>
            <h3>100% Anonymous</h3>
            <p>No KYC verification required. Your wallet address is your identity. Play with complete privacy.</p>
          </motion.div>

          <motion.div className="feature-card" variants={cardVariant} whileHover={{ y: -5 }}>
            <div className="feature-icon yellow">
              <IoFlashSharp size={32} />
            </div>
            <h3>Instant Access</h3>
            <p>Register in 30 seconds with just an email. Start playing immediately without verification delays.</p>
          </motion.div>

          <motion.div className="feature-card" variants={cardVariant} whileHover={{ y: -5 }}>
            <div className="feature-icon blue">
              <IoCashSharp size={32} />
            </div>
            <h3>Fast Withdrawals</h3>
            <p>Process withdrawals in 15-30 minutes. No manual reviews or document requests.</p>
          </motion.div>

          <motion.div className="feature-card" variants={cardVariant} whileHover={{ y: -5 }}>
            <div className="feature-icon green">
              <IoGlobeSharp size={32} />
            </div>
            <h3>VPN Friendly</h3>
            <p>Access from anywhere. We don't restrict based on location. UAE players welcome.</p>
          </motion.div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          className="how-it-works"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2>How Anonymous Gaming Works</h2>
          <div className="steps-row">
            <div className="step-item">
              <div className="step-number">1</div>
              <h4>Quick Registration</h4>
              <p>Email only. 30 seconds.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h4>Deposit Crypto</h4>
              <p>BTC, ETH, USDT & more</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h4>Play Instantly</h4>
              <p>No verification delays</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h4>Withdraw Fast</h4>
              <p>15-30 minute processing</p>
            </div>
          </div>
        </motion.div>

        {/* Security & Crypto */}
        <div className="info-row">
          <motion.div 
            className="info-box security-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3><IoShieldCheckmarkSharp /> Security Without KYC</h3>
            <ul>
              <li>✓ Blockchain transparency</li>
              <li>✓ Wallet verification</li>
              <li>✓ Provably fair gaming</li>
              <li>✓ No personal data stored</li>
            </ul>
          </motion.div>

          <motion.div 
            className="info-box crypto-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3><IoWalletSharp /> Supported Crypto</h3>
            <div className="crypto-list">
              <span><FaBitcoin /> Bitcoin</span>
              <span><FaEthereum /> Ethereum</span>
              <span>💲 USDT</span>
              <span>Ł Litecoin</span>
              <span>ɱ Monero</span>
              <span>+ More</span>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="features-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2>Ready to Play Anonymous?</h2>
          <p>No verification. No documents. No waiting. Just crypto and gaming.</p>
          <motion.button 
            className="btn btn-large btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Playing Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}

export default Features

