import React, { useRef, useEffect, useState } from 'react'
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
    <section className="bonus-slider-section">
      <div className="container">
        <div className="bonus-slider">
          <div className="slider-container">
            <div className="slider-track" ref={sliderRef}>
              {bonuses.map((bonus) => (
                <div key={bonus.id} className="bonus-card">
                  <div 
                    className="bonus-card-background" 
                    style={{ background: bonus.gradient }}
                  ></div>
                  <div className="bonus-card-content">
                    <h3 className="bonus-title">{bonus.title}</h3>
                    <p className="bonus-amount">{bonus.amount}</p>
                    <button className="btn btn-white">Join now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="slider-dots">
            {bonuses.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BonusSlider



