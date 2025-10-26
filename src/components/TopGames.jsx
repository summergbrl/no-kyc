import React from 'react'
import { IoGameControllerSharp } from 'react-icons/io5'
import './Games.css'

const topGames = [
  { id: 1, name: 'Gates of Olympus', badge: 'Drops & Wins', rank: 1, image: 'https://fruityslots.com/wp-content/uploads/2023/10/Gates-of-Olympus-1000-Slot-jpg.webp' },
  { id: 2, name: 'Sweet Bonanza', badge: 'new', rank: 2, image: 'https://pragmaticplay.net/wp-content/uploads/2020/06/SweetBonanza.png' },
  { id: 3, name: 'Book of Dead', rank: 3, image: 'https://www.playngonetwork.com/casino/wp-content/uploads/game/book-of-dead/en/logo.png' },
  { id: 4, name: 'Starburst', rank: 4, image: 'https://cdn.casinoorbit.com/prod/assets/images/game-thumb/5836.webp' },
  { id: 5, name: 'Aviator', rank: 5, image: 'https://spribe.co/wp-content/uploads/2021/11/Aviator.jpg' },
  { id: 6, name: 'Wolf Gold', badge: 'new', rank: 6, image: 'https://pragmaticplay.net/wp-content/uploads/2017/04/Wolf-Gold.png' },
  { id: 7, name: 'Big Bass Bonanza', rank: 7, image: 'https://pragmaticplay.net/wp-content/uploads/2020/12/BigBassBonanza.png' },
  { id: 8, name: 'Reactoonz', rank: 8, image: 'https://www.playngonetwork.com/casino/wp-content/uploads/game/reactoonz/en/logo.png' }
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


