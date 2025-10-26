import React from 'react'
import { IoSparkles } from 'react-icons/io5'
import './Games.css'

const newGames = [
  { id: 1, name: 'Turbo Diamonds', badge: 'new', image: 'https://images.unsplash.com/photo-1611068813580-c7cba4c1dd1e?w=400&h=533&fit=crop&q=80' },
  { id: 2, name: 'SWOLL', badge: 'new', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400&h=533&fit=crop&q=80' },
  { id: 3, name: '5 Relics of Power', badge: 'new', image: 'https://images.unsplash.com/photo-1571667221998-d6aa0817c4c7?w=400&h=533&fit=crop&q=80' },
  { id: 4, name: 'Fruit Train Express', badge: 'new', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=533&fit=crop&q=80' },
  { id: 5, name: 'Cash Blitz', badge: 'new', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=533&fit=crop&q=80' },
  { id: 6, name: 'Regal Spins 10', badge: 'new', image: 'https://images.unsplash.com/photo-1536599424071-0820a2b6e6d5?w=400&h=533&fit=crop&q=80' },
  { id: 7, name: 'Lucky Penny', image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=533&fit=crop&q=80' },
  { id: 8, name: 'Book of Fallen', image: 'https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=533&fit=crop&q=80' }
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
                {game.image ? (
                  <img src={game.image} alt={game.name} className="game-img" loading="lazy" />
                ) : (
                  <div className="game-placeholder">
                    <span className="game-icon"><IoSparkles /></span>
                  </div>
                )}
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


