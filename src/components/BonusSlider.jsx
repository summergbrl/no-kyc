import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './BonusSlider.css'

const bonuses = [
  {
    id: 1,
    title: 'Crypto Welcome Bonus',
    amount: '200% up to 3000 USDT',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
  },
  {
    id: 2,
    title: 'Sport Crypto Welcome Bonus',
    amount: '100% up to 200 USDT',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
  },
  {
    id: 3,
    title: 'Casino Welcome Package',
    amount: '200% up to €2500 + 300 FS',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
  },
  {
    id: 4,
    title: 'Sport Welcome Bonus',
    amount: '100% up to €100',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  }
]

const BonusSlider = () => {
  const sliderRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bonuses.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <motion.section 
      className="bonus-slider-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="bonus-slider">
          <div className="slider-container">
            <div className="slider-track" ref={sliderRef}>
              {bonuses.map((bonus, idx) => (
                <motion.div 
                  key={bonus.id} 
                  className="bonus-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="bonus-card-background" 
                    style={{ background: bonus.gradient }}
                    animate={{
                      opacity: currentSlide === idx ? [0.8, 1, 0.8] : 0.8
                    }}
                    transition={{
                      duration: 3,
                      repeat: currentSlide === idx ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="bonus-card-content">
                    <motion.h3 
                      className="bonus-title"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {bonus.title}
                    </motion.h3>
                    <motion.p 
                      className="bonus-amount"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {bonus.amount}
                    </motion.p>
                    <motion.button 
                      className="btn btn-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Join now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="slider-dots"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {bonuses.map((_, index) => (
              <motion.button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: currentSlide === index ? [1, 1.2, 1] : 1
                }}
                transition={{
                  scale: { duration: 0.5, repeat: currentSlide === index ? Infinity : 0 }
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default BonusSlider



