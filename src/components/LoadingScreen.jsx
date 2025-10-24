import React from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-icon-large">
            <span>no</span>
          </div>
          <div className="logo-text-large">
            <span className="kyc-text-large">KYC</span>
            <span className="casino-text-large">Casino</span>
          </div>
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen


