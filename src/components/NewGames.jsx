import React from 'react'
import { IoSparkles } from 'react-icons/io5'
import './Games.css'

const newGames = [
  { id: 1, name: 'Sugar Rush', badge: 'new', image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/14593027/529213_366714.jpeg' },
  { id: 2, name: 'Starlight Princess', badge: 'new', image: 'https://www.casinoreviews.net/assets/images/games/netent/starburst/game-poster.png' },
  { id: 3, name: 'Wild West Gold', badge: 'new', image: 'https://online.casinocity.com/image_resize.ashx?type=game&imgid=62318&width=280' },
  { id: 4, name: 'Great Rhino Megaways', badge: 'new', image: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/678aa35d8b4319b084287ee9/0x0.png' },
  { id: 5, name: 'The Dog House', badge: 'new', image: 'https://www.casino.org/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fvpd5gtrb1dbp%2F2UWTPeAVGYz573BxYrfPc5%2Fd44a4934aaad43de0db9350f975b4975%2Fbook-of-dead__1_.jpg&w=3840&q=75' },
  { id: 6, name: 'Fruit Party', badge: 'new', image: 'https://itmmeerut.org/wp-content/uploads/2023/10/Aviator-Casino-Game.webp' },
  { id: 7, name: 'Aztec Gems', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-aMTydablP9qZPz1NLFUQroyaPeJT0ddN2w&s' },
  { id: 8, name: 'John Hunter', image: 'https://fruityslots.com/wp-content/uploads/2023/10/Gates-of-Olympus-1000-Slot-jpg.webp' }
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
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="game-img" 
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2))';
                          const placeholder = document.createElement('div');
                          placeholder.className = 'game-placeholder';
                          placeholder.innerHTML = '<span class="game-icon" style="font-size: 48px; color: rgba(139, 92, 246, 0.5);"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 96.83 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path></svg></span>';
                          if (!e.target.parentElement.querySelector('.game-placeholder')) {
                            e.target.parentElement.insertBefore(placeholder, e.target.parentElement.firstChild);
                          }
                        }}
                      />
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


