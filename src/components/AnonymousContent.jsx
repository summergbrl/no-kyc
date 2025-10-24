import React from 'react'
import { motion } from 'framer-motion'
import { 
  IoLockClosedSharp, IoFlashSharp, IoCashSharp, IoGlobeSharp, IoTrendingUpSharp,
  IoShieldCheckmarkSharp, IoWalletSharp, IoSearchSharp, IoCheckmarkCircleSharp,
  IoKeySharp, IoPhonePortraitSharp, IoBriefcaseSharp, IoCheckmarkSharp,
  IoCloseCircleSharp, IoWarningSharp,
  IoGameControllerSharp, IoTrophySharp, IoCardSharp, IoRocketSharp, IoDiceSharp,
  IoFootballSharp
} from 'react-icons/io5'
import { 
  FaBitcoin, FaEthereum
} from 'react-icons/fa'
import { 
  SiLitecoin, SiTether, SiMonero
} from 'react-icons/si'
import './AnonymousContent.css'

const AnonymousContent = () => {
  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="anonymous-content">
      <div className="container">
        <div className="content-wrapper">
          
          {/* Main Title */}
          <motion.div 
            className="content-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h1 
              className="main-title"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Play Anonymous With No-KYCasino for UAE Players 2025
            </motion.h1>
            <motion.p 
              className="main-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to the world of anonymous crypto gaming. We're a no-KYC casino, which means you can play, win, and withdraw without ever showing us your ID. No passport scans. No utility bills. No waiting for verification approval.
            </motion.p>
          </motion.div>

          {/* What Makes Us Different */}
          <div className="content-section">
            <h2 className="section-heading">What Makes Us Different?</h2>
            <p>Traditional online casinos demand extensive personal information before letting you play:</p>
            <ul className="feature-list">
              <li>Government ID verification</li>
              <li>Proof of address documents</li>
              <li>Bank statements</li>
              <li>Selfie verification</li>
              <li>24-48 hour approval waiting</li>
            </ul>
            <p className="highlight-text">
              We skip all that. Register with just an email address, deposit crypto, and start playing immediately. Your privacy matters to us.
            </p>
          </div>

          {/* How Anonymous Gaming Works */}
          <motion.div 
            className="content-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-heading">How Anonymous Gaming Works</h2>
            
            <motion.div 
              className="steps-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="step-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="step-number"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    ease: "easeInOut"
                  }}
                >1</motion.div>
                <h3 className="step-title">Quick Registration</h3>
                <p>Create your account in under 30 seconds. We only need an email address—that's it. Some players even use temporary email addresses for extra privacy.</p>
              </motion.div>

              <motion.div 
                className="step-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="step-number"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                >2</motion.div>
                <h3 className="step-title">Deposit Cryptocurrency</h3>
                <p>Send Bitcoin, Ethereum, or other supported cryptocurrencies to your unique wallet address. Funds appear in your balance within minutes after blockchain confirmation.</p>
              </motion.div>

              <motion.div 
                className="step-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="step-number"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                >3</motion.div>
                <h3 className="step-title">Play Instantly</h3>
                <p>Access our complete game library immediately. No verification delays, no document reviews, no waiting periods.</p>
              </motion.div>

              <motion.div 
                className="step-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="step-number"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    delay: 1.5,
                    ease: "easeInOut"
                  }}
                >4</motion.div>
                <h3 className="step-title">Withdraw Anytime</h3>
                <p>Request withdrawals to your cryptocurrency wallet whenever you want. We process most withdrawals within 15-30 minutes. Your first withdrawal goes to your original deposit address for security.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why UAE Players Choose */}
          <motion.div 
            className="content-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-heading">Why UAE Players Choose Anonymous Casinos</h2>
            
            <motion.div 
              className="benefits-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="benefit-card"
                variants={cardVariant}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <IoLockClosedSharp />
                </motion.div>
                <h3 className="benefit-title">Complete Privacy</h3>
                <p>Your gambling activity stays between you and the blockchain. We don't collect government IDs, utility bills, or personal documents. Your wallet address is your identity here.</p>
              </motion.div>

              <motion.div 
                className="benefit-card"
                variants={cardVariant}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <IoFlashSharp />
                </motion.div>
                <h3 className="benefit-title">Instant Access</h3>
                <p>Register and play within minutes. No document upload queues or multi-day verification processes are holding up your gaming.</p>
              </motion.div>

              <motion.div 
                className="benefit-card"
                variants={cardVariant}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <IoCashSharp />
                </motion.div>
                <h3 className="benefit-title">Fast Withdrawals</h3>
                <p>No manual verification reviews delaying your winnings. Cryptocurrency transactions are processed according to blockchain speeds—typically 15-30 minutes.</p>
              </motion.div>

              <motion.div 
                className="benefit-card"
                variants={cardVariant}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <IoGlobeSharp />
                </motion.div>
                <h3 className="benefit-title">VPN Friendly</h3>
                <p>We don't restrict access based on location. As long as you have cryptocurrency, you can play. Many UAE players use VPN for added privacy—we have no issue with that.</p>
              </motion.div>

              <motion.div 
                className="benefit-card"
                variants={cardVariant}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="benefit-icon"
                  animate={{ y: [0, -5, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                >
                  <IoTrendingUpSharp />
                </motion.div>
                <h3 className="benefit-title">Higher Limits</h3>
                <p>Without verification bottlenecks, we can offer higher withdrawal limits than traditional casinos. Move your winnings when you want, how much you want.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Understanding Verification Levels */}
          <div className="content-section">
            <h2 className="section-heading">Understanding Different Verification Levels</h2>
            <p>Not all "no-KYC" casinos operate the same way. Here's how to identify different approaches:</p>
            
            <div className="verification-types">
              <div className="verification-card highlight-card">
                <h3>True No-KYC (That's Us)</h3>
                <p>Zero verification requirements regardless of how much you deposit or withdraw. We never ask for personal documents. Your wallet address is sufficient identification.</p>
              </div>

              <div className="verification-card">
                <h3>Low-KYC Platforms</h3>
                <p>These let you play anonymously until hitting specific withdrawal thresholds (usually 0.5-2 BTC). Then verification kicks in. They're "no-KYC" until you win big—then suddenly they need documents.</p>
              </div>

              <div className="verification-card warning-card">
                <h3>Deceptive Claims</h3>
                <p>Some platforms advertise "no verification" but request documents at first withdrawal. They use the promise of anonymity to attract players, then spring surprise requirements.</p>
              </div>
            </div>

            <p className="commitment-text">
              <strong>Our commitment:</strong> We're true no-KYC. We've never requested identity documents, and we never will.
            </p>
          </div>

          {/* Security */}
          <div className="content-section">
            <h2 className="section-heading">Security Without Identity Verification</h2>
            <p className="section-intro">You might wonder: "If they don't check IDs, how do they prevent fraud?"</p>
            
            <div className="security-features">
              <div className="security-item">
                <h4><IoShieldCheckmarkSharp className="inline-icon" /> Blockchain Transparency</h4>
                <p>Every transaction recorded on public ledgers. Anyone can verify our deposits, bets, and withdrawals without revealing player identities. Complete transparency without compromising anonymity.</p>
              </div>

              <div className="security-item">
                <h4><IoWalletSharp className="inline-icon" /> Wallet Verification</h4>
                <p>We verify you control your cryptocurrency wallet, not your personal identity. Your first withdrawal must go to your original deposit address—preventing account hijacking while maintaining privacy.</p>
              </div>

              <div className="security-item">
                <h4><IoSearchSharp className="inline-icon" /> Behavioral Analysis</h4>
                <p>Our systems detect suspicious patterns (bot behavior, rapid deposit/loss cycles) without collecting personal information. We flag wallets, not identities.</p>
              </div>

              <div className="security-item">
                <h4><IoCheckmarkCircleSharp className="inline-icon" /> Provably Fair Gaming</h4>
                <p>Every game result can be verified cryptographically. You don't need to trust us—you can mathematically confirm fairness using blockchain data.</p>
              </div>
            </div>
          </div>

          {/* Supported Cryptocurrencies */}
          <motion.div 
            className="content-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="section-heading">Supported Cryptocurrencies</h2>
            <p>We accept multiple cryptocurrencies to maximize your privacy and convenience:</p>
            
            <motion.div 
              className="crypto-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="crypto-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="crypto-symbol"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaBitcoin />
                </motion.div>
                <h4>Bitcoin (BTC)</h4>
                <p>Most widely used. Offers strong pseudonymity and universal acceptance.</p>
              </motion.div>

              <motion.div 
                className="crypto-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="crypto-symbol"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaEthereum />
                </motion.div>
                <h4>Ethereum (ETH)</h4>
                <p>Fast confirmations and smart contract capability for provably fair games.</p>
              </motion.div>

              <motion.div 
                className="crypto-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="crypto-symbol"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <SiLitecoin />
                </motion.div>
                <h4>Litecoin (LTC)</h4>
                <p>Faster than Bitcoin with lower fees. Popular for quick deposits and withdrawals.</p>
              </motion.div>

              <motion.div 
                className="crypto-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="crypto-symbol"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <SiTether />
                </motion.div>
                <h4>USDT (Tether)</h4>
                <p>Stablecoin pegged to USD. Protects against crypto price volatility.</p>
              </motion.div>

              <motion.div 
                className="crypto-card"
                variants={cardVariant}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(251, 191, 36, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="crypto-symbol"
                  animate={{ 
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                >
                  <SiMonero />
                </motion.div>
                <h4>Monero (XMR)</h4>
                <p>Maximum privacy. Even blockchain analysis can't trace Monero transactions.</p>
              </motion.div>
            </motion.div>
            <p className="crypto-note">More cryptocurrencies supported—check our deposit page for the complete list.</p>
          </motion.div>

          {/* UAE Players Info */}
          <div className="content-section info-section">
            <h2 className="section-heading">UAE Players: What You Should Know</h2>
            
            <div className="info-grid">
              <div className="info-card">
                <h4><IoWarningSharp className="inline-icon" /> Legal Considerations</h4>
                <p>UAE maintains strict gambling regulations. While we operate internationally and don't collect personal information, you're responsible for understanding local laws. Many players use VPN for privacy—we support this practice.</p>
              </div>

              <div className="info-card">
                <h4><IoCashSharp className="inline-icon" /> Tax Obligations</h4>
                <p>Anonymity doesn't eliminate tax responsibilities. Cryptocurrency gambling winnings may be taxable in your jurisdiction. We don't report to tax authorities (we don't collect identifying information), but you should consult tax professionals about your obligations.</p>
              </div>

              <div className="info-card">
                <h4><IoShieldCheckmarkSharp className="inline-icon" /> VPN Recommended</h4>
                <p>Most UAE players access us through a VPN. We're completely VPN-friendly and don't restrict based on IP addresses. Your privacy matters to us.</p>
              </div>
            </div>
          </div>

          {/* How to Play */}
          <div className="content-section">
            <h2 className="section-heading">How to Play Anonymously</h2>
            
            <div className="guide-steps">
              <div className="guide-step">
                <h4>Step 1: Get a Cryptocurrency Wallet</h4>
                <p>You'll need a crypto wallet to deposit and withdraw. Popular options:</p>
                <ul>
                  <li><strong>Trust Wallet</strong> - Mobile-friendly, supports multiple cryptocurrencies</li>
                  <li><strong>MetaMask</strong> - Great for Ethereum and tokens</li>
                  <li><strong>Exodus</strong> - User-friendly desktop and mobile wallet</li>
                  <li><strong>Ledger</strong> - Hardware wallet for maximum security</li>
                </ul>
              </div>

              <div className="guide-step">
                <h4>Step 2: Buy Cryptocurrency</h4>
                <p>Purchase Bitcoin or other cryptocurrencies from exchanges. Many UAE players use:</p>
                <ul>
                  <li>Binance</li>
                  <li>Crypto.com</li>
                  <li>Coinbase</li>
                  <li>LocalBitcoins (for peer-to-peer purchases)</li>
                </ul>
              </div>

              <div className="guide-step">
                <h4>Step 3: Register With Us</h4>
                <p>Create your account with just an email address. Takes under 30 seconds.</p>
              </div>

              <div className="guide-step">
                <h4>Step 4: Deposit</h4>
                <p>Send cryptocurrency from your wallet to the deposit address we provide. Funds appear within minutes.</p>
              </div>

              <div className="guide-step">
                <h4>Step 5: Play</h4>
                <p>Browse our game library and start playing immediately. No waiting for verification approval.</p>
              </div>

              <div className="guide-step">
                <h4>Step 6: Withdraw Winnings</h4>
                <p>Request a withdrawal to your wallet anytime. We process most requests within 15-30 minutes.</p>
              </div>
            </div>
          </div>

          {/* Our Games */}
          <div className="content-section">
            <h2 className="section-heading">Our Games</h2>
            <p>We offer a complete gaming library without requiring identity verification:</p>
            
            <div className="games-list">
              <div className="game-type">
                <h4><IoGameControllerSharp className="inline-icon" /> Slots</h4>
                <p>Hundreds of titles from top providers, including provably fair options you can verify cryptographically.</p>
              </div>

              <div className="game-type">
                <h4><IoTrophySharp className="inline-icon" /> Live Casino</h4>
                <p>Real dealers streaming in HD. Play roulette, blackjack, and baccarat with cryptocurrency bets.</p>
              </div>

              <div className="game-type">
                <h4><IoCardSharp className="inline-icon" /> Table Games</h4>
                <p>Classic casino games including poker variants, baccarat, and more.</p>
              </div>

              <div className="game-type">
                <h4><IoRocketSharp className="inline-icon" /> Crash Games</h4>
                <p>Fast-paced multiplayer games like Aviator. Watch the multiplier climb and cash out before it crashes.</p>
              </div>

              <div className="game-type">
                <h4><IoDiceSharp className="inline-icon" /> Dice & Originals</h4>
                <p>Provably fair games where you can verify every result using blockchain data.</p>
              </div>

              <div className="game-type">
                <h4><IoFootballSharp className="inline-icon" /> Sports Betting</h4>
                <p>Bet on global sports events with cryptocurrency. Fast settlements, anonymous wagering.</p>
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="content-section">
            <h2 className="section-heading">Bonuses Without Verification</h2>
            <p>We offer generous bonuses without requiring identity documents:</p>
            
            <div className="bonus-list">
              <div className="bonus-item">
                <h4><IoCheckmarkCircleSharp className="inline-icon" /> Welcome Bonus</h4>
                <p>Enhanced match on your first deposit. Better rates than traditional casinos because we save on compliance costs.</p>
              </div>

              <div className="bonus-item">
                <h4><IoCheckmarkCircleSharp className="inline-icon" /> Reload Bonuses</h4>
                <p>Regular deposit bonuses for returning players. Weekly and monthly offers.</p>
              </div>

              <div className="bonus-item">
                <h4><IoCashSharp className="inline-icon" /> Rakeback Program</h4>
                <p>Get a percentage of your total wagering returned as cryptocurrency. No complicated tier systems—straightforward cashback.</p>
              </div>

              <div className="bonus-item">
                <h4><IoTrendingUpSharp className="inline-icon" /> VIP Program</h4>
                <p>Exclusive perks for high-volume players. Enhanced rakeback, priority withdrawals, personal account management—all while maintaining complete anonymity.</p>
              </div>

              <div className="bonus-item">
                <h4><IoCheckmarkCircleSharp className="inline-icon" /> Tournaments</h4>
                <p>Compete anonymously using your wallet address. Prize pools paid directly to winners' wallets.</p>
              </div>
            </div>
          </div>

          {/* Responsible Gaming */}
          <div className="content-section warning-section">
            <h2 className="section-heading">Responsible Gaming</h2>
            <p>Anonymity means you control your gambling activity without external oversight. This freedom requires personal responsibility:</p>
            
            <div className="responsible-list">
              <div className="responsible-item">
                <h4>Set Personal Limits</h4>
                <p>Decide maximum deposits, losses, and session times before playing. Track these manually since we can't enforce limits without identity verification.</p>
              </div>

              <div className="responsible-item">
                <h4>Understand Volatility</h4>
                <p>Cryptocurrency values fluctuate. Set gambling budgets in fiat value (USD/AED equivalent) rather than crypto amounts.</p>
              </div>

              <div className="responsible-item">
                <h4>Never Chase Losses</h4>
                <p>Anonymous platforms make redepositing easy. Establish strict rules and follow them regardless of emotions.</p>
              </div>

              <div className="responsible-item">
                <h4>Take Regular Breaks</h4>
                <p>No verification means instant re-entry. Schedule mandatory breaks to prevent compulsive behavior.</p>
              </div>

              <div className="responsible-item">
                <h4>Separate Funds</h4>
                <p>Keep gambling cryptocurrency separate from investment or savings holdings. Different wallets, different purposes.</p>
              </div>

              <div className="responsible-item">
                <h4>Seek Help if Needed</h4>
                <p>Anonymity doesn't mean isolation. Professional support exists for gambling problems. Don't hesitate to reach out.</p>
              </div>
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="content-section">
            <h2 className="section-heading">Security Best Practices</h2>
            <p>Protect your account and cryptocurrency:</p>
            
            <div className="practices-grid">
              <div className="practice-item">
                <span className="practice-icon"><IoKeySharp /></span>
                <div>
                  <h4>Use Strong Passwords</h4>
                  <p>Create unique passwords for your casino account. Never reuse passwords from other sites.</p>
                </div>
              </div>

              <div className="practice-item">
                <span className="practice-icon"><IoPhonePortraitSharp /></span>
                <div>
                  <h4>Enable Two-Factor Authentication</h4>
                  <p>Add an extra security layer even for anonymous accounts. Protects against unauthorized access.</p>
                </div>
              </div>

              <div className="practice-item">
                <span className="practice-icon"><IoBriefcaseSharp /></span>
                <div>
                  <h4>Secure Your Wallet</h4>
                  <p>Keep significant cryptocurrency in hardware wallets (Ledger, Trezor) rather than leaving large amounts in a casino balance.</p>
                </div>
              </div>

              <div className="practice-item">
                <span className="practice-icon"><IoCheckmarkSharp /></span>
                <div>
                  <h4>Check Withdrawal Addresses</h4>
                  <p>Always verify destination wallet addresses before confirming withdrawals. Cryptocurrency transactions are irreversible.</p>
                </div>
              </div>

              <div className="practice-item">
                <span className="practice-icon"><IoGlobeSharp /></span>
                <div>
                  <h4>Use VPN</h4>
                  <p>Access our platform through VPN consistently, especially from restricted jurisdictions.</p>
                </div>
              </div>

              <div className="practice-item">
                <span className="practice-icon"><IoCloseCircleSharp /></span>
                <div>
                  <h4>Never Share Private Keys</h4>
                  <p>We'll never ask for your wallet private keys. Anyone requesting them is attempting fraud.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="content-section">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            
            <div className="faq-list">
              <div className="faq-item">
                <h4>Do you really never require verification?</h4>
                <p>Never. We're a true no-KYC casino. Your wallet address is your identity here. We've never requested documents and never will.</p>
              </div>

              <div className="faq-item">
                <h4>How much can I withdraw?</h4>
                <p>We don't impose arbitrary withdrawal limits. Withdraw as much as you've won, whenever you want.</p>
              </div>

              <div className="faq-item">
                <h4>How fast are withdrawals?</h4>
                <p>Most withdrawals process within 15-30 minutes. Timing depends on blockchain confirmation speeds for your chosen cryptocurrency.</p>
              </div>

              <div className="faq-item">
                <h4>Is anonymous gambling legal in UAE?</h4>
                <p>UAE maintains strict gambling regulations. We operate internationally and don't collect personal information, but you're responsible for understanding local laws.</p>
              </div>

              <div className="faq-item">
                <h4>Do you accept VPN users?</h4>
                <p>Yes. We're completely VPN-friendly and don't restrict access based on IP addresses.</p>
              </div>

              <div className="faq-item">
                <h4>Can I use multiple cryptocurrencies?</h4>
                <p>Absolutely. Deposit with Bitcoin, withdraw with Ethereum—whatever works best for you.</p>
              </div>

              <div className="faq-item">
                <h4>Are games provably fair?</h4>
                <p>Yes. Our provably fair games can be verified cryptographically using blockchain data. You can mathematically confirm every result.</p>
              </div>

              <div className="faq-item">
                <h4>What if I lose access to my email?</h4>
                <p>Since we don't collect extensive personal information, account recovery is limited. We strongly recommend using secure email addresses and enabling two-factor authentication.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="content-section highlight-section">
            <h2 className="section-heading">Why Choose Us</h2>
            
            <div className="reasons-grid">
              <div className="reason-item">
                <span className="reason-icon"><IoLockClosedSharp /></span>
                <h4>True Anonymity</h4>
                <p>We never collect identity documents. Your wallet address is sufficient.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><IoFlashSharp /></span>
                <h4>Fast Transactions</h4>
                <p>Deposits confirm within minutes. Withdrawals process within 15-30 minutes.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><IoGameControllerSharp /></span>
                <h4>Complete Game Library</h4>
                <p>Slots, live casino, sports betting, and provably fair originals.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><IoGlobeSharp /></span>
                <h4>VPN Friendly</h4>
                <p>Access from anywhere. We don't restrict based on location.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><FaBitcoin /></span>
                <h4>Cryptocurrency Focused</h4>
                <p>Built specifically for crypto players. We understand blockchain technology and privacy needs.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><IoCheckmarkCircleSharp /></span>
                <h4>Transparent & Fair</h4>
                <p>Provably fair games you can verify yourself. Blockchain transparency without identity disclosure.</p>
              </div>

              <div className="reason-item">
                <span className="reason-icon"><IoShieldCheckmarkSharp /></span>
                <h4>No Hidden Requirements</h4>
                <p>What you see is what you get. No surprise verification requests when you win.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="cta-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <motion.h2 
              className="cta-title"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Play?
            </motion.h2>
            <motion.p 
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience truly anonymous cryptocurrency gambling. No documents, no verification delays, no compromises on privacy.
            </motion.p>
            <motion.div 
              className="cta-highlights"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={cardVariant}>
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                  <IoCheckmarkSharp className="inline-icon" />
                </motion.span> 
                Your wallet address is your identity
              </motion.p>
              <motion.p variants={cardVariant}>
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.3 }}
                >
                  <IoCheckmarkSharp className="inline-icon" />
                </motion.span> 
                Your crypto is your stake
              </motion.p>
              <motion.p variants={cardVariant}>
                <motion.span 
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.6 }}
                >
                  <IoCheckmarkSharp className="inline-icon" />
                </motion.span> 
                Your privacy is guaranteed
              </motion.p>
            </motion.div>
            <motion.button 
              className="btn btn-large btn-primary cta-button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 60px rgba(139, 92, 246, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 40px rgba(139, 92, 246, 0.3)",
                  "0 10px 60px rgba(139, 92, 246, 0.5)",
                  "0 10px 40px rgba(139, 92, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Start Playing Now!!!
            </motion.button>
          </motion.div>

          {/* Disclaimer */}
          <div className="disclaimer">
            <p>
              <strong>Important Notice:</strong> Gambling should be entertainment, not income strategy. Only gamble with cryptocurrency you can afford to lose. Understand local laws and tax obligations in your jurisdiction. If gambling becomes problematic, seek professional help.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AnonymousContent
