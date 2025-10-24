import React, { useEffect, useState } from 'react'
import { IoFlashSharp, IoLockClosedSharp, IoCashSharp } from 'react-icons/io5'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="title-line">Play Anonymous</span>
            <span className="title-highlight">No-KYC Casino</span>
            <span className="title-line">for UAE Players 2025</span>
          </h1>
          <p className="hero-description">
            Register with just an email. Deposit crypto. Start playing instantly.
            <br />
            <strong>No verification. No documents. No waiting.</strong>
          </p>
          <div className="hero-buttons">
            <button className="btn btn-large btn-primary">
              Start Playing Now
            </button>
            <button className="btn btn-large btn-outline">
              Learn More
            </button>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">
                <IoFlashSharp />
              </div>
              <div className="feature-text">
                <div className="feature-title">Instant Access</div>
                <div className="feature-desc">Register in 30 seconds</div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <IoLockClosedSharp />
              </div>
              <div className="feature-text">
                <div className="feature-title">Complete Privacy</div>
                <div className="feature-desc">True anonymity</div>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <IoCashSharp />
              </div>
              <div className="feature-text">
                <div className="feature-title">Fast Withdrawals</div>
                <div className="feature-desc">15-30 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


