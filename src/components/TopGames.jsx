import React from 'react'
import { IoGameControllerSharp } from 'react-icons/io5'
import './Games.css'

const topGames = [
  { id: 1, name: 'Gates of Olympus', badge: 'Drops & Wins', rank: 1, image: 'https://fruityslots.com/wp-content/uploads/2023/10/Gates-of-Olympus-1000-Slot-jpg.webp' },
  { id: 2, name: 'Sweet Bonanza', badge: 'new', rank: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSu7tGGIJ8iiKAWKUF9uIlpZYB01-rbovAwA&s' },
  { id: 3, name: 'Book of Dead', rank: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fVXLp4y6T_RKxVHQb8YzB1Aw5xPB7jqNpg&s' },
  { id: 4, name: 'Starburst', rank: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdC3qG4UyfDhKwJ_aVWwE5W5gU0kQXPYm-Gg&s' },
  { id: 5, name: 'Aviator', rank: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6QmCZqK7VvKhYW5HL7LfBxCnXN8qKYNhbQ&s' },
  { id: 6, name: 'Wolf Gold', badge: 'new', rank: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMKw5LN8Z-iBb7_3qJvlG9Y5xQHHxQvGHXQ&s' },
  { id: 7, name: 'Big Bass Bonanza', rank: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPvLwX7mC5YbxW9xQJ8kFHp5gYdKLMxYPKw&s' },
  { id: 8, name: 'Reactoonz', rank: 8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qX7LVnHJw0NQB8YzX5L7j9K6pM8kW9wQXg&s' }
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
                          placeholder.innerHTML = '<span class="game-icon" style="font-size: 48px; color: rgba(139, 92, 246, 0.5);"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 00352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 00-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0018.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 01-32 0v-32h-32a16 16 0 010-32h32v-32a16 16 0 0132 0v32h32a16 16 0 010 32zm84 4a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-19.95A20 20 0 01336 288zm0-88a20 20 0 1120-20 20 20 0 01-20 20zm44 44a20 20 0 1120-20 20 20 0 01-20 20z"></path></svg></span>';
                          if (!e.target.parentElement.querySelector('.game-placeholder')) {
                            e.target.parentElement.insertBefore(placeholder, e.target.parentElement.firstChild);
                          }
                        }}
                      />
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


