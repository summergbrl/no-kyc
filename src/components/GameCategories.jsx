import React from 'react'
import { 
  IoGameController, IoFlame, IoSparkles, IoStar, IoDiamond, IoDiamondSharp,
  IoTrophySharp, IoDiscSharp, IoLayersSharp, IoCardSharp, IoGridSharp,
  IoTvSharp, IoCashSharp, IoRocketSharp, IoFootballSharp, IoBasketballSharp,
  IoCubeSharp, IoAlbumsSharp, IoDiceSharp, IoWalletSharp, IoGiftSharp
} from 'react-icons/io5'
import './GameCategories.css'

const categories = [
  { name: 'All Games', icon: <IoGridSharp />, link: '#all', highlight: true },
  { name: 'Top', icon: <IoFlame />, link: '#top', highlight: true },
  { name: 'New', icon: <IoSparkles />, link: '#new' },
  { name: 'Slots', icon: <IoAlbumsSharp />, link: '#slots' },
  { name: 'Live Casino', icon: <IoTvSharp />, link: '#live-casino' },
  { name: 'Roulette', icon: <IoDiscSharp />, link: '#roulette' },
  { name: 'Blackjack', icon: <IoCardSharp />, link: '#blackjack' },
  { name: 'Baccarat', icon: <IoDiamondSharp />, link: '#baccarat' },
  { name: 'Game Shows', icon: <IoLayersSharp />, link: '#game-shows' },
  { name: 'Megaways', icon: <IoTrophySharp />, link: '#megaways' },
  { name: 'Jackpots', icon: <IoCashSharp />, link: '#jackpots' },
  { name: 'Dice Games', icon: <IoDiceSharp />, link: '#dice' },
  { name: 'Crash Games', icon: <IoRocketSharp />, link: '#crash' },
  { name: 'Virtual Sports', icon: <IoFootballSharp />, link: '#virtual-sports' },
  { name: 'Sports', icon: <IoBasketballSharp />, link: '#sports' },
  { name: 'Providers', icon: <IoGameController />, link: '#providers' },
  { name: 'Bonus Buy', icon: <IoGiftSharp />, link: '#bonus-buy' },
  { name: 'Table Games', icon: <IoCubeSharp />, link: '#table-games' },
  { name: 'Popular', icon: <IoStar />, link: '#popular' },
  { name: 'VIP', icon: <IoWalletSharp />, link: '#vip' }
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
                className={`category-item ${category.highlight ? 'highlight' : ''} ${index === 0 ? 'active' : ''}`}
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


