import React from 'react'
import { IoSparkles } from 'react-icons/io5'
import './Games.css'

const newGames = [
  { id: 1, name: 'Sugar Rush', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2023/02/SugarRush.png' },
  { id: 2, name: 'Starlight Princess', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2021/06/StarlightPrincess.png' },
  { id: 3, name: 'Wild West Gold', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2020/02/WildWestGold.png' },
  { id: 4, name: 'Great Rhino Megaways', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2020/07/GreatRhinoMegaways.png' },
  { id: 5, name: 'The Dog House', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2019/07/The-Dog-House.png' },
  { id: 6, name: 'Fruit Party', badge: 'new', image: 'https://pragmaticplay.net/wp-content/uploads/2020/05/FruitParty.png' },
  { id: 7, name: 'Aztec Gems', image: 'https://pragmaticplay.net/wp-content/uploads/2018/10/Aztec-Gems.png' },
  { id: 8, name: 'John Hunter', image: 'https://pragmaticplay.net/wp-content/uploads/2019/03/John-Hunter-and-the-Tomb-of-the-Scarab-Queen.png' }
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


