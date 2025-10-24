import React from 'react'
import { IoGameControllerSharp } from 'react-icons/io5'
import './Games.css'

const topGames = [
  { id: 1, name: 'Gates of Olympus', badge: 'Drops & Wins', rank: 1 },
  { id: 2, name: 'Turbo Diamonds', badge: 'new', rank: 2 },
  { id: 3, name: 'Witches\' Book', rank: 3 },
  { id: 4, name: 'Book of Ra', rank: 4 },
  { id: 5, name: 'Aviator', rank: 5 },
  { id: 6, name: 'SWOLL', badge: 'new', rank: 6 },
  { id: 7, name: 'Duel at Dawn', rank: 7 },
  { id: 8, name: 'Reactoonz 2', rank: 8 }
]

const TopGames = () => {
  return (
    <section className="games-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Top Games</h2>
          <a href="#top" className="see-all-link">
            See all (427)
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        <div className="games-grid">
          {topGames.map((game) => (
            <div key={game.id} className="game-card">
              <div className="game-rank">{game.rank}</div>
              <div className="game-image">
                <div className="game-placeholder">
                  <span className="game-icon"><IoGameControllerSharp /></span>
                </div>
                {game.badge && (
                  <div className={`game-badge ${game.badge === 'new' ? 'badge-new' : 'badge-promo'}`}>
                    {game.badge}
                  </div>
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
          
          <a href="#top" className="more-games-card">
            <div className="more-games-icon">+</div>
            <div className="more-games-text">More Games</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TopGames


