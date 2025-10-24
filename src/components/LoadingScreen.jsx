import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { IoDiamondSharp, IoStarSharp } from 'react-icons/io5'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Elements */}
      <div className="loading-background">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {i % 4 === 0 && <FaBitcoin size={30} />}
            {i % 4 === 1 && <FaEthereum size={30} />}
            {i % 4 === 2 && <IoDiamondSharp size={30} />}
            {i % 4 === 3 && <IoStarSharp size={30} />}
          </motion.div>
        ))}
      </div>

      <div className="loading-content">
        {/* Animated Logo */}
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div 
            className="logo-icon-large"
            animate={{
              boxShadow: [
                "0 8px 32px rgba(139, 92, 246, 0.4)",
                "0 8px 48px rgba(139, 92, 246, 0.8)",
                "0 8px 32px rgba(139, 92, 246, 0.4)",
              ],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              no
            </motion.span>
          </motion.div>
          <div className="logo-text-large">
            <motion.span 
              className="kyc-text-large"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              KYC
            </motion.span>
            <motion.span 
              className="casino-text-large"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Casino
            </motion.span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.h3
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Initializing Anonymous Gaming
          </motion.h3>
          <p>Setting up your secure connection...</p>
        </motion.div>

        {/* Spinning Circles */}
        <div className="loading-spinner">
          <motion.div 
            className="spinner-ring spinner-ring-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="spinner-ring spinner-ring-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="spinner-ring spinner-ring-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="progress-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
            <motion.div 
              className="progress-glow"
              style={{ left: `${progress}%` }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.div 
            className="progress-text"
            key={progress}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen


