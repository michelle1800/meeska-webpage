import { useState, useEffect } from 'react';
import './App.css';
import originalImg from './assets/meeska-original.jpeg';
import strawberryImg from './assets/meeska-strawberry.jpeg';
import blueberryImg from './assets/meeska-blueberry.jpeg';
import cinnamonImg from './assets/meeska-cinnamon.jpeg';

const HERO_FLAVORS = [
  { src: originalImg, alt: 'Meeska Original', name: 'Original' },
  { src: strawberryImg, alt: 'Meeska Strawberry', name: 'Strawberry' },
  { src: blueberryImg, alt: 'Meeska Blueberry', name: 'Blueberry' },
  { src: cinnamonImg, alt: 'Meeska Cinnamon Brown Sugar', name: 'Cinnamon Brown Sugar' },
];

const FLAVORS = [
  { name: 'Sweet Strawberry', img: strawberryImg, colorClass: 'flavor-strawberry' },
  { name: 'Wild Blueberry', img: blueberryImg, colorClass: 'flavor-blueberry' },
  { name: 'Cinnamon Brown Sugar', img: cinnamonImg, colorClass: 'flavor-cinnamon' },
  { name: 'Original', img: originalImg, colorClass: 'flavor-original' },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, []);
}

const INGREDIENT_CALLOUTS = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2" />
        <path d="M8 12s1.5-2 4-2 4 2 4 2" />
        <path d="M12 6v2" />
        <path d="M9 8.5l1 1.5" />
        <path d="M15 8.5l-1 1.5" />
      </svg>
    ),
    label: 'Ultra Smooth Texture',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l1 5H7L8 2z" />
        <path d="M7 7c0 8 2 15 5 15s5-7 5-15" />
        <path d="M5 7h14" />
      </svg>
    ),
    label: '99% Lactose Free',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'No Artificial Ingredients',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5l11 11" />
        <path d="M3 12c0-2 1.5-4 4-5s5.5-.5 7 1c1.5-1.5 4.5-2 7-1s4 3 4 5" />
        <path d="M3 12c0 4 3 8 9 10 6-2 9-6 9-10" />
      </svg>
    ),
    label: 'Good Source of Protein',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L3 21l1-3.13" />
        <path d="M11 2c2 4 4 6 9 8-3 2-5 4-7 8-2-4-4-6-9-8 3-2 5-4 7-8z" />
      </svg>
    ),
    label: 'Low Sugar',
  },
];

const REVIEWS = [
  {
    text: "I've never had anything like this — it's like dessert but actually good for you. My whole family is obsessed.",
    name: 'Sarah M.',
    stars: 5,
  },
  {
    text: "The blueberry flavor is incredible. So creamy and smooth, and I love that there's no added sugar. It's my go-to snack now.",
    name: 'James R.',
    stars: 5,
  },
  {
    text: "Finally, a high-protein snack that doesn't taste like cardboard. The strawberry is my favorite — tastes like real fruit!",
    name: 'Emily K.',
    stars: 5,
  },
  {
    text: "I brought this to a party and everyone asked where I got it. The cinnamon brown sugar is absolutely divine.",
    name: 'Michael T.',
    stars: 5,
  },
];

function App() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [currentFlavor, setCurrentFlavor] = useState(0);

  useScrollReveal();

  useEffect(() => {
    const hasSeen = localStorage.getItem('meeska_signup_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => setShowSignupModal(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-rotate hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFlavor((prev) => (prev + 1) % HERO_FLAVORS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleCloseModal = () => {
    setShowSignupModal(false);
    localStorage.setItem('meeska_signup_seen', 'true');
  };

  const submitEmail = async (emailAddress) => {
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailAddress }),
      });
      if (!res.ok) throw new Error('Signup failed');
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitEmail(email);
    localStorage.setItem('meeska_signup_seen', 'true');
    setShowSignupModal(false);
    setEmail('');
  };

  const handleFooterSubmit = async (e) => {
    e.preventDefault();
    await submitEmail(footerEmail);
    setFooterEmail('');
  };

  return (
    <div className="page">
      {/* Nav */}
      <header className="hero-nav">
        <div className="hero-nav-left">
          <div className="hero-logo-text">
            <span className="hero-logo-name">Meeska</span>
            <span className="hero-logo-tagline">High Protein Dairy Snack</span>
          </div>
        </div>

        <nav className="hero-nav-right">
          <button className="hero-cta" onClick={() => setShowSignupModal(true)}>Get Meeska</button>
          <a href="#our-story">Our Story</a>
          <a href="#reviews">Reviews</a>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-main">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />

          <div className="hero-heading">
            <span className="hero-word-meeska">Meeska</span>
            <div className="hero-sub">
              The dairy snack you didn't know you were missing.
            </div>
            <div className="hero-sub-2">
              High-protein. Simple ingredients. Ridiculously good.
            </div>
          </div>

          <div className="hero-product">
            <div className="hero-product-glow">
              <div className="hero-carousel">
                {HERO_FLAVORS.map((flavor, i) => (
                  <img
                    key={flavor.name}
                    src={flavor.src}
                    alt={flavor.alt}
                    className={`hero-product-img${i === currentFlavor ? ' active' : ''}`}
                  />
                ))}
              </div>
            </div>

            <div className="hero-flavor-name">{HERO_FLAVORS[currentFlavor].name}</div>

            <div className="hero-dots">
              {HERO_FLAVORS.map((flavor, i) => (
                <button
                  key={flavor.name}
                  className={`hero-dot${i === currentFlavor ? ' active' : ''}`}
                  onClick={() => setCurrentFlavor(i)}
                  aria-label={`Show ${flavor.name}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="our-story" className="story-section">
          <div className="story-content">
            <div className="story-text">
              <span className="story-eyebrow reveal">OUR STORY</span>
              <h2 className="story-heading reveal reveal-delay-1">
                The Story of Meeska
              </h2>
              <p className="story-body reveal reveal-delay-2">
                Meeska was created with one simple goal — to make a dairy snack that is
                wholesome, clean, and ridiculously tasty. Our farmer's cheese blends real
                ingredients with bold flavors to give you something that feels nostalgic,
                comforting, and genuinely good for you.
              </p>
              <p className="story-body reveal reveal-delay-3">
                Inspired by generations of tradition, we took a beloved family recipe and
                reimagined it for the modern snacker — high protein, no added sugar, and
                flavors that make you feel like you're cheating (but you're not).
              </p>
            </div>
            <div className="story-image reveal reveal-delay-2">
              <img
                src={originalImg}
                alt="Meeska Original"
                className="story-img"
              />
            </div>
          </div>

          <div className="story-flavors">
            <h3 className="story-flavors-heading reveal">Our Flavors</h3>
            <div className="story-flavor-grid reveal reveal-delay-1">
              {FLAVORS.map((flavor) => (
                <div className={`story-flavor-card ${flavor.colorClass}`} key={flavor.name}>
                  <img
                    src={flavor.img}
                    alt={`Meeska ${flavor.name}`}
                    className="story-flavor-img"
                  />
                  <h4>{flavor.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LET'S GET REAL WITH OUR INGREDIENTS */}
        <section className="ingredients-section">
          <h2 className="ingredients-heading reveal">
            LET'S GET REAL WITH OUR INGREDIENTS
          </h2>

          <div className="ingredients-layout reveal reveal-delay-1">
            <div className="ingredients-callouts ingredients-callouts-left">
              {INGREDIENT_CALLOUTS.slice(0, 2).map((item) => (
                <div className="ingredient-item" key={item.label}>
                  <div className="ingredient-icon">{item.icon}</div>
                  <span className="ingredient-label">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="ingredients-product-wrap">
              <img
                src={originalImg}
                alt="Meeska Original"
                className="ingredients-product-img"
              />
            </div>

            <div className="ingredients-callouts ingredients-callouts-right">
              {INGREDIENT_CALLOUTS.slice(2, 4).map((item) => (
                <div className="ingredient-item" key={item.label}>
                  <div className="ingredient-icon">{item.icon}</div>
                  <span className="ingredient-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ingredients-bottom-callout reveal reveal-delay-2">
            <div className="ingredient-item">
              <div className="ingredient-icon">{INGREDIENT_CALLOUTS[4].icon}</div>
              <span className="ingredient-label">{INGREDIENT_CALLOUTS[4].label}</span>
            </div>
          </div>
        </section>

        {/* US VS. THEM SECTION */}
        <section className="comparison-section">
          <h2 className="comparison-title reveal">US VS. THEM</h2>

          <div className="comparison-table reveal reveal-delay-1">
            <div className="comparison-row comparison-row-header">
              <div className="comparison-cell comparison-label" />
              <div className="comparison-cell">
                Conventional<br />Greek Yogurt
              </div>
              <div className="comparison-cell">Protein Bars</div>
              <div className="comparison-cell">
                Typical<br />Probiotics
              </div>
              <div className="comparison-cell meeska-col">Meeska</div>
            </div>

            {[
              ['Protein',          true,  true,  false, true],
              ['Probiotic',        false, false, true,  true],
              ['Zero Added Sugar', false, false, true,  true],
              ['Unprocessed',      false, false, false, true],
              ['Tastes Amazing!',  false, false, false, true],
            ].map(([label, ...vals]) => (
              <div className="comparison-row" key={label}>
                <div className="comparison-cell comparison-label">{label}</div>
                {vals.map((v, i) => (
                  <div
                    className={`comparison-cell${i === 3 ? ' meeska-col' : ''}`}
                    key={i}
                  >
                    {v
                      ? <span className="check">&#10003;</span>
                      : <span className="x-mark">&#10005;</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* SPOONFULS OF PRAISE */}
        <section id="reviews" className="reviews-section">
          <h2 className="reviews-heading reveal">SPOONFULS OF PRAISE</h2>
          <p className="reviews-subheading reveal reveal-delay-1">
            From first bite to last spoon, here's what fans are saying.
          </p>

          <div className="reviews-conveyor reveal reveal-delay-2">
            <div className="reviews-track">
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div className="review-card" key={`${review.name}-${i}`}>
                  <div className="review-stars">
                    {'★'.repeat(review.stars)}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <span className="review-name">{review.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECIPES COMING SOON */}
        <section className="recipes-section">
          <h2 className="recipes-heading reveal">HOW TO MIX IT UP WITH MEESKA</h2>
          <p className="recipes-subheading reveal reveal-delay-1">
            Sweet, fresh, and endlessly versatile — discover new ways to enjoy every cup.
          </p>

          <div className="recipes-grid reveal reveal-delay-2">
            {['Smoothie Bowl', 'Farmer Cheese Cake', 'Frozen Bites'].map((name) => (
              <div className="recipe-card" key={name}>
                <div className="recipe-placeholder">
                  <span className="recipe-coming-soon">Coming Soon</span>
                </div>
                <h3 className="recipe-name">{name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className="footer-section">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-logo">Meeska</span>
              <span className="footer-logo-sub">High Protein Dairy Snack</span>
            </div>

            <div className="footer-links">
              <a href="#our-story">Our Story</a>
              <a href="#reviews">Reviews</a>
              <button className="footer-link-btn" onClick={() => setShowSignupModal(true)}>
                Get Meeska
              </button>
            </div>

            <div className="footer-signup">
              <h3 className="footer-title">Get Updates</h3>
              <form className="footer-form" onSubmit={handleFooterSubmit}>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="footer-input"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                />
                <button type="submit" className="footer-submit">&rarr;</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; 2025, Meeska &middot; Privacy policy
          </div>
        </footer>
      </main>

      {/* EMAIL SIGNUP MODAL */}
      {showSignupModal && (
        <div className="signup-overlay">
          <div className="signup-modal">
            <button
              className="signup-close"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="signup-title">Be the First to Try Meeska</h2>
            <p className="signup-text">
              Join the list for early access, exclusive drops, and first release flavors.
            </p>

            <form onSubmit={handleSubmit} className="signup-form">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
              />
              <button type="submit" className="signup-button">
                Sign me up
              </button>
            </form>

            <button className="signup-skip" onClick={handleCloseModal}>
              No thanks
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
