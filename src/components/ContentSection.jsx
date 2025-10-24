import React from 'react'
import { motion } from 'framer-motion'
import './ContentSection.css'

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="container">
        
        {/* What Makes Us Different */}
        <div className="content-block">
          <h2>What Makes Us Different?</h2>
          <p>Traditional online casinos demand extensive personal information before letting you play:</p>
          <ul className="checklist">
            <li>Government ID verification</li>
            <li>Proof of address documents</li>
            <li>Bank statements</li>
            <li>Selfie verification</li>
            <li>24-48 hour approval waiting</li>
          </ul>
          <p className="highlight">We skip all that. Register with just an email address, deposit crypto, and start playing immediately. Your privacy matters to us.</p>
        </div>

        {/* Understanding Verification Levels */}
        <div className="content-block">
          <h2>Understanding Different Verification Levels</h2>
          <p>Not all "no-KYC" casinos operate the same way. Here's how to identify different approaches:</p>
          
          <div className="verification-cards">
            <div className="verify-card highlight-card">
              <h3>True No-KYC (That's Us)</h3>
              <p>Zero verification requirements regardless of how much you deposit or withdraw. We never ask for personal documents. Your wallet address is sufficient identification.</p>
            </div>

            <div className="verify-card">
              <h3>Low-KYC Platforms</h3>
              <p>These let you play anonymously until hitting specific withdrawal thresholds (usually 0.5-2 BTC). Then verification kicks in. They're "no-KYC" until you win big—then suddenly they need documents.</p>
            </div>

            <div className="verify-card warning-card">
              <h3>Deceptive Claims</h3>
              <p>Some platforms advertise "no verification" but request documents at first withdrawal. They use the promise of anonymity to attract players, then spring surprise requirements.</p>
            </div>
          </div>

          <p className="commitment"><strong>Our commitment:</strong> We're true no-KYC. We've never requested identity documents, and we never will.</p>
        </div>

        {/* Security */}
        <div className="content-block">
          <h2>Security Without Identity Verification</h2>
          <p className="intro">You might wonder: "If they don't check IDs, how do they prevent fraud?"</p>
          
          <div className="security-features">
            <div className="security-item">
              <h4>🔗 Blockchain Transparency</h4>
              <p>Every transaction recorded on public ledgers. Anyone can verify our deposits, bets, and withdrawals without revealing player identities. Complete transparency without compromising anonymity.</p>
            </div>

            <div className="security-item">
              <h4>💼 Wallet Verification</h4>
              <p>We verify you control your cryptocurrency wallet, not your personal identity. Your first withdrawal must go to your original deposit address—preventing account hijacking while maintaining privacy.</p>
            </div>

            <div className="security-item">
              <h4>📊 Behavioral Analysis</h4>
              <p>Our systems detect suspicious patterns (bot behavior, rapid deposit/loss cycles) without collecting personal information. We flag wallets, not identities.</p>
            </div>

            <div className="security-item">
              <h4>✅ Provably Fair Gaming</h4>
              <p>Every game result can be verified cryptographically. You don't need to trust us—you can mathematically confirm fairness using blockchain data.</p>
            </div>
          </div>
        </div>

        {/* UAE Players Info */}
        <div className="content-block warning-block">
          <h2>UAE Players: What You Should Know</h2>
          
          <div className="info-cards">
            <div className="info-card-item">
              <h4>⚠️ Legal Considerations</h4>
              <p>UAE maintains strict gambling regulations. While we operate internationally and don't collect personal information, you're responsible for understanding local laws. Many players use VPN for privacy—we support this practice.</p>
            </div>

            <div className="info-card-item">
              <h4>💰 Tax Obligations</h4>
              <p>Anonymity doesn't eliminate tax responsibilities. Cryptocurrency gambling winnings may be taxable in your jurisdiction. We don't report to tax authorities (we don't collect identifying information), but you should consult tax professionals about your obligations.</p>
            </div>

            <div className="info-card-item">
              <h4>🛡️ VPN Recommended</h4>
              <p>Most UAE players access us through a VPN. We're completely VPN-friendly and don't restrict based on IP addresses. Your privacy matters to us.</p>
            </div>
          </div>
        </div>

        {/* How to Play */}
        <div className="content-block">
          <h2>How to Play Anonymously</h2>
          
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
        <div className="content-block">
          <h2>Our Games</h2>
          <p>We offer a complete gaming library without requiring identity verification:</p>
          
          <div className="games-list">
            <div className="game-type">
              <h4>🎰 Slots</h4>
              <p>Hundreds of titles from top providers, including provably fair options you can verify cryptographically.</p>
            </div>

            <div className="game-type">
              <h4>🎥 Live Casino</h4>
              <p>Real dealers streaming in HD. Play roulette, blackjack, and baccarat with cryptocurrency bets.</p>
            </div>

            <div className="game-type">
              <h4>🃏 Table Games</h4>
              <p>Classic casino games including poker variants, baccarat, and more.</p>
            </div>

            <div className="game-type">
              <h4>🚀 Crash Games</h4>
              <p>Fast-paced multiplayer games like Aviator. Watch the multiplier climb and cash out before it crashes.</p>
            </div>

            <div className="game-type">
              <h4>🎲 Dice & Originals</h4>
              <p>Provably fair games where you can verify every result using blockchain data.</p>
            </div>

            <div className="game-type">
              <h4>⚽ Sports Betting</h4>
              <p>Bet on global sports events with cryptocurrency. Fast settlements, anonymous wagering.</p>
            </div>
          </div>
        </div>

        {/* Bonuses */}
        <div className="content-block">
          <h2>Bonuses Without Verification</h2>
          <p>We offer generous bonuses without requiring identity documents:</p>
          
          <div className="bonus-list">
            <div className="bonus-item">
              <h4>🎁 Welcome Bonus</h4>
              <p>Enhanced match on your first deposit. Better rates than traditional casinos because we save on compliance costs.</p>
            </div>

            <div className="bonus-item">
              <h4>🔄 Reload Bonuses</h4>
              <p>Regular deposit bonuses for returning players. Weekly and monthly offers.</p>
            </div>

            <div className="bonus-item">
              <h4>💵 Rakeback Program</h4>
              <p>Get a percentage of your total wagering returned as cryptocurrency. No complicated tier systems—straightforward cashback.</p>
            </div>

            <div className="bonus-item">
              <h4>👑 VIP Program</h4>
              <p>Exclusive perks for high-volume players. Enhanced rakeback, priority withdrawals, personal account management—all while maintaining complete anonymity.</p>
            </div>

            <div className="bonus-item">
              <h4>🏆 Tournaments</h4>
              <p>Compete anonymously using your wallet address. Prize pools paid directly to winners' wallets.</p>
            </div>
          </div>
        </div>

        {/* Responsible Gaming */}
        <div className="content-block warning-block">
          <h2>Responsible Gaming</h2>
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
        <div className="content-block">
          <h2>Security Best Practices</h2>
          <p>Protect your account and cryptocurrency:</p>
          
          <div className="practices-grid">
            <div className="practice-item">
              <h4>🔐 Use Strong Passwords</h4>
              <p>Create unique passwords for your casino account. Never reuse passwords from other sites.</p>
            </div>

            <div className="practice-item">
              <h4>📱 Enable Two-Factor Authentication</h4>
              <p>Add an extra security layer even for anonymous accounts. Protects against unauthorized access.</p>
            </div>

            <div className="practice-item">
              <h4>💼 Secure Your Wallet</h4>
              <p>Keep significant cryptocurrency in hardware wallets (Ledger, Trezor) rather than leaving large amounts in a casino balance.</p>
            </div>

            <div className="practice-item">
              <h4>✔️ Check Withdrawal Addresses</h4>
              <p>Always verify destination wallet addresses before confirming withdrawals. Cryptocurrency transactions are irreversible.</p>
            </div>

            <div className="practice-item">
              <h4>🌐 Use VPN</h4>
              <p>Access our platform through VPN consistently, especially from restricted jurisdictions.</p>
            </div>

            <div className="practice-item">
              <h4>🚫 Never Share Private Keys</h4>
              <p>We'll never ask for your wallet private keys. Anyone requesting them is attempting fraud.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="content-block">
          <h2>Frequently Asked Questions</h2>
          
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
        <div className="content-block highlight-block">
          <h2>Why Choose Us</h2>
          
          <div className="reasons-grid">
            <div className="reason-item">
              <span className="reason-icon">🔒</span>
              <h4>True Anonymity</h4>
              <p>We never collect identity documents. Your wallet address is sufficient.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">⚡</span>
              <h4>Fast Transactions</h4>
              <p>Deposits confirm within minutes. Withdrawals process within 15-30 minutes.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">🎮</span>
              <h4>Complete Game Library</h4>
              <p>Slots, live casino, sports betting, and provably fair originals.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">🌍</span>
              <h4>VPN Friendly</h4>
              <p>Access from anywhere. We don't restrict based on location.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">₿</span>
              <h4>Cryptocurrency Focused</h4>
              <p>Built specifically for crypto players. We understand blockchain technology and privacy needs.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">✅</span>
              <h4>Transparent & Fair</h4>
              <p>Provably fair games you can verify yourself. Blockchain transparency without identity disclosure.</p>
            </div>

            <div className="reason-item">
              <span className="reason-icon">🛡️</span>
              <h4>No Hidden Requirements</h4>
              <p>What you see is what you get. No surprise verification requests when you win.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContentSection

