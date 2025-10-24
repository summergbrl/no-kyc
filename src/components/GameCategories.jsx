import React from 'react'
import { 
  IoGameController, IoFlame, IoSparkles, IoStar, IoDiamond,
  IoTrophySharp, IoDiscSharp, IoLayersSharp, IoCardSharp, IoGridSharp
} from 'react-icons/io5'
import './GameCategories.css'

const categories = [
  { name: 'Providers', icon: <IoGameController />, link: '#providers' },
  { name: 'Top', icon: <IoFlame />, link: '#top' },
  { name: 'New', icon: <IoSparkles />, link: '#new' },
  { name: 'Popular', icon: <IoStar />, link: '#popular' },
  { name: 'Top Live Casino', icon: <IoTrophySharp />, link: '#live-casino' },
  { name: 'Roulette', icon: <IoDiscSharp />, link: '#roulette' },
  { name: 'Game Shows', icon: <IoLayersSharp />, link: '#game-shows' },
  { name: 'Blackjack', icon: <IoCardSharp />, link: '#blackjack' },
  { name: 'Hot Jackpots', icon: <IoDiamond />, link: '#jackpots' },
  { name: 'Slots', icon: <IoGridSharp />, link: '#slots' }
]

const GameCategories = () => {
  return (
    <section className="game-categories">
      <div className="container">
        <div className="search-bar">
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Search
          </button>
        </div>
        
        <div className="categories-scroll">
          <div className="categories-list">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={category.link} 
                className="category-item"
              >
                <span className="category-icon-wrapper">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GameCategories


