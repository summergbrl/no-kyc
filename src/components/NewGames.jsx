import React from 'react'
import { IoSparkles } from 'react-icons/io5'
import './Games.css'

const newGames = [
  { id: 1, name: 'Turbo Diamonds', badge: 'new' },
  { id: 2, name: 'SWOLL', badge: 'new' },
  { id: 3, name: '5 Relics of Power', badge: 'new' },
  { id: 4, name: 'Fruit Train Express', badge: 'new' },
  { id: 5, name: 'Cash Blitz', badge: 'new' },
  { id: 6, name: 'Regal Spins 10', badge: 'new' },
  { id: 7, name: 'Lucky Penny' },
  { id: 8, name: 'Book of Fallen' }
]

const NewGames = () => {
  return (
    <section className="games-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Games</h2>
          <a href="#new" className="see-all-link">
            See all (1928)
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="games-grid">
          {newGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-image">
                <div className="game-placeholder">
                  <span className="game-icon"><IoSparkles /></span>
                </div>
                {game.badge && (
                  <div className="game-badge badge-new">{game.badge}</div>
                )}
                <div className="game-overlay">
                  <button className="game-btn game-btn-play">Play</button>
                  <button className="game-btn game-btn-demo">Demo</button>
                </div>
              </div>
              <div className="game-info">
                <h3 className="game-name">{game.name}</h3>
              </div>
            </div>
          ))}
          
          <a href="#new" className="more-games-card">
            <div className="more-games-icon">+</div>
            <div className="more-games-text">More Games</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewGames


