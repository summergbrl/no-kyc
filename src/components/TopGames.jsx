import React from 'react'
import { IoGameControllerSharp } from 'react-icons/io5'
import './Games.css'

const topGames = [
  { id: 1, name: 'Gates of Olympus', badge: 'Drops & Wins', rank: 1, image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=533&fit=crop&q=80' },
  { id: 2, name: 'Turbo Diamonds', badge: 'new', rank: 2, image: 'https://images.unsplash.com/photo-1611068813580-c7cba4c1dd1e?w=400&h=533&fit=crop&q=80' },
  { id: 3, name: 'Witches\' Book', rank: 3, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=533&fit=crop&q=80' },
  { id: 4, name: 'Book of Ra', rank: 4, image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=533&fit=crop&q=80' },
  { id: 5, name: 'Aviator', rank: 5, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=533&fit=crop&q=80' },
  { id: 6, name: 'SWOLL', badge: 'new', rank: 6, image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=533&fit=crop&q=80' },
  { id: 7, name: 'Duel at Dawn', rank: 7, image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=533&fit=crop&q=80' },
  { id: 8, name: 'Reactoonz 2', rank: 8, image: 'https://images.unsplash.com/photo-1529310399831-ed472b81d589?w=400&h=533&fit=crop&q=80' }
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
                {game.image ? (
                  <img src={game.image} alt={game.name} className="game-img" loading="lazy" />
                ) : (
                  <div className="game-placeholder">
                    <span className="game-icon"><IoGameControllerSharp /></span>
                  </div>
                )}
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


