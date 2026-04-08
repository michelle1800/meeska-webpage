import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import originalImg from './assets/meeska-original.jpeg';
import strawberryImg from './assets/meeska-strawberry.jpeg';
import blueberryImg from './assets/meeska-blueberry.jpeg';
import cinnamonImg from './assets/meeska-cinnamon.jpeg';
import storyImg from './assets/meeska-story.jpg';
import frozenBitesImg from './assets/meeska-frozen-bites.jpeg';
import mamaMashasCakeImg from './assets/mama-mashas-cake.jpeg';
import smoothieBowlImg from './assets/smoothie-bowl.jpeg';
import farmerCheeseImg from './assets/farmer-cheese.jpg';
import nutritionImg from './assets/meeska-nutrition-label.jpeg';

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
        <path d="M8 2h8l1 5H7L8 2z" />
        <path d="M7 7c0 8 2 15 5 15s5-7 5-15" />
        <path d="M5 7h14" />
      </svg>
    ),
    label: 'Lactose Intolerance Friendly',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: 'Live & Active Probiotic Cultures',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5l11 11" />
        <path d="M3 12c0-2 1.5-4 4-5s5.5-.5 7 1c1.5-1.5 4.5-2 7-1s4 3 4 5" />
        <path d="M3 12c0 4 3 8 9 10 6-2 9-6 9-10" />
      </svg>
    ),
    label: '15g of Protein per Serving',
  },
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
    label: 'No Added Salt or Sugar',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L3 21l1-3.13" />
        <path d="M11 2c2 4 4 6 9 8-3 2-5 4-7 8-2-4-4-6-9-8 3-2 5-4 7-8z" />
      </svg>
    ),
    label: 'Non-GMO Ingredients',
  },
];

const REVIEWS = [
  {
    text: "I've never had anything like this. It's like dessert but actually good for you. My whole family is obsessed.",
    name: 'Sarah M.',
    stars: 5,
  },
  {
    text: "The blueberry flavor is incredible. So creamy and smooth, and I love that there's no added sugar. It's my go-to snack now.",
    name: 'James R.',
    stars: 5,
  },
  {
    text: "Finally, a high-protein snack that doesn't taste like cardboard. The strawberry is my favorite, tastes like real fruit!",
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
    const hasSeen = sessionStorage.getItem('meeska_signup_seen');
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
    sessionStorage.setItem('meeska_signup_seen', 'true');
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
    sessionStorage.setItem('meeska_signup_seen', 'true');
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
        <a href="#hero" className="hero-nav-left" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="hero-logo-text">
            <span className="hero-logo-name">Meeska</span>
            <span className="hero-logo-tagline">High Protein Dairy Snack</span>
          </div>
        </a>

        <nav className="hero-nav-right">
          <button className="hero-cta" onClick={() => setShowSignupModal(true)}>Join the Meeska Family</button>
          <a href="#our-story">Our Story</a>
          <a href="#reviews">Reviews</a>
          <a href="#recipes">Recipes</a>
          <Link to="/faq">FAQ</Link>
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

            <button className="hero-main-cta" onClick={() => setShowSignupModal(true)}>
              Join the Meeska Family
            </button>
          </div>

          <div className="hero-tagline">Cottage Cheese's Cooler Cousin</div>

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
                Meeska was born from a family tradition and reimagined for today.
              </p>
              <p className="story-body reveal reveal-delay-2">
                It started with my great-grandma, Alina. Growing up as a competitive tennis
                player training over 36 hours a week, I needed to fuel my body the right way,
                and she took that seriously. She'd make me simple farmer cheese bowls with
                fresh berries and sweet jam. Nothing fancy, but something I genuinely looked
                forward to every single day. It was smooth, satisfying, comforting, and
                delicious. I was obsessed. I even chose it over ice cream.
              </p>
              <p className="story-body reveal reveal-delay-3">
                Back then, it wasn't about protein or nutrition. It was just something that
                felt good to eat.
              </p>
              <p className="story-body reveal reveal-delay-3">
                Years later, when I started looking at the snack options on the market,
                something felt off. Too many were overly processed, too sugary, or just
                uninspiring, and I kept craving something that felt real. Something naturally
                high in protein, delicious enough to actually want, and versatile enough to
                reach for any time of day. When I went back to the farmer cheese I'd grown up
                on, I realized it had been that thing all along.
              </p>
              <p className="story-body reveal reveal-delay-3">
                So I created Meeska, a fresh take on a beloved Eastern European staple,
                bringing it into a new era as a modern high-protein dairy snack. It's smooth,
                nourishing, and indulgent, rooted in generations of family tradition but made
                for a new generation of people who refuse to compromise on what they eat.
              </p>
              <p className="story-body story-body-closing reveal reveal-delay-3">
                This is more than a snack. It's tradition, reinvented.
              </p>
            </div>
            <div className="story-image reveal reveal-delay-2">
              <img
                src={storyImg}
                alt="The story behind Meeska"
                className="story-img"
              />
            </div>
          </div>

        </section>

        {/* WHAT IS FARMER CHEESE */}
        <section className="farmer-cheese-section">
          <div className="farmer-cheese-content">
            <div className="farmer-cheese-image reveal">
              <img
                src={farmerCheeseImg}
                alt="Farmer cheese"
                className="farmer-cheese-img"
              />
            </div>
            <div className="farmer-cheese-text">
              <span className="farmer-cheese-eyebrow reveal">THE BASICS</span>
              <h2 className="farmer-cheese-heading reveal reveal-delay-1">
                What is Farmer Cheese?
              </h2>
              <p className="farmer-cheese-body reveal reveal-delay-2">
                Farmer cheese is a fresh, unaged cheese made through one of the simplest
                processes in dairy. Milk is gently acidified, the curds separate from the whey,
                and what remains is strained into a soft form. No aging. No additives. Just
                milk, transformed.
              </p>
              <p className="farmer-cheese-body reveal reveal-delay-2">
                It sits in a category of its own. Softer than ricotta, denser than yogurt,
                milder than cottage cheese. Farmer cheese has a smooth, slightly tangy character
                that makes it just as at home in sweet applications as savory ones. It melts
                into dishes, holds its shape in pastries, and eats beautifully straight from the
                spoon.
              </p>
              <p className="farmer-cheese-body reveal reveal-delay-3">
                What sets it apart nutritionally is what's left after the whey is removed: a
                concentrated source of casein protein, calcium, and phosphorus, with naturally
                low sugar and a clean, short ingredient list. No stabilizers, no thickeners, no
                fillers.
              </p>
              <p className="farmer-cheese-body reveal reveal-delay-3">
                For centuries, farmer cheese has been made in home kitchens across Eastern
                Europe, the Middle East, and South Asia under different names and in different
                forms, but always with the same principle: take good milk, handle it gently, and
                don't overcomplicate it.
              </p>
              <p className="farmer-cheese-body farmer-cheese-closing reveal reveal-delay-3">
                That simplicity is exactly what makes it so powerful.
              </p>
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
              <div className="ingredients-carousel">
                {HERO_FLAVORS.map((flavor, i) => (
                  <img
                    key={flavor.name}
                    src={flavor.src}
                    alt={flavor.alt}
                    className={`ingredients-carousel-img${i === currentFlavor ? ' active' : ''}`}
                  />
                ))}
              </div>
              <div className="ingredients-flavor-name">{HERO_FLAVORS[currentFlavor].name}</div>
              <div className="ingredients-dots">
                {HERO_FLAVORS.map((flavor, i) => (
                  <button
                    key={flavor.name}
                    className={`ingredients-dot${i === currentFlavor ? ' active' : ''}`}
                    onClick={() => setCurrentFlavor(i)}
                    aria-label={`Show ${flavor.name}`}
                  />
                ))}
              </div>
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

          <div className="ingredients-details reveal reveal-delay-2">
            <div className="ingredients-highlights">
              <h3 className="ingredients-details-heading">Key Highlights</h3>
              <ul className="ingredients-highlights-list">
                <li>Lactose Intolerance Friendly</li>
                <li>Live and Active Probiotic Cultures</li>
                <li>15g of Protein per Serving</li>
                <li>Made with Reduced Fat Milk</li>
                <li>High in Calcium</li>
                <li>No Added Salt or Sugar</li>
                <li>Non-GMO Ingredients</li>
              </ul>
            </div>
            <div className="ingredients-nutrition">
              <h3 className="ingredients-details-heading">Nutrition Facts</h3>
              <img
                src={nutritionImg}
                alt="Meeska Original nutrition label"
                className="ingredients-nutrition-img"
              />
              <p className="nutrition-disclaimer">*Nutrition facts apply to the Original Meeska flavor only.</p>
            </div>
          </div>
        </section>

        {/* OUR GROWING FAMILY OF FLAVORS */}
        <section className="story-flavors-section">
          <h3 className="story-flavors-heading reveal">Our Growing Family of Flavors</h3>
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
        <section id="recipes" className="recipes-section">
          <h2 className="recipes-heading reveal">HOW TO MIX IT UP WITH MEESKA</h2>
          <p className="recipes-subheading reveal reveal-delay-1">
            Sweet, fresh, and endlessly versatile. Discover new ways to enjoy every cup.
          </p>

          <div className="recipes-grid reveal reveal-delay-2">
            {[
              { name: 'Frozen Bites', img: frozenBitesImg, link: '/recipes/frozen-bites' },
              { name: "Mama Masha's Cake", img: mamaMashasCakeImg, link: '/recipes/mama-mashas-cake' },
              { name: 'Smoothie Bowl', img: smoothieBowlImg, link: '/recipes/smoothie-bowl' },
            ].map((recipe) => {
              const card = (
                <div className={`recipe-card${recipe.link ? ' recipe-card-clickable' : ''}`} key={recipe.name}>
                  {recipe.img ? (
                    <img src={recipe.img} alt={recipe.name} className="recipe-img" />
                  ) : (
                    <div className="recipe-placeholder">
                      <span className="recipe-coming-soon">Coming Soon</span>
                    </div>
                  )}
                  <h3 className="recipe-name">{recipe.name}</h3>
                </div>
              );
              return recipe.link ? (
                <Link to={recipe.link} key={recipe.name} className="recipe-card-link">
                  {card}
                </Link>
              ) : card;
            })}
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
              <Link to="/faq">FAQ</Link>
              <button className="footer-link-btn" onClick={() => setShowSignupModal(true)}>
                Get Meeska
              </button>
              <a href="mailto:contact@meeska.us">contact@meeska.us</a>
              <a href="https://www.instagram.com/eatmeeska" target="_blank" rel="noopener noreferrer" className="footer-instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Follow us on Instagram
              </a>
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

            <h2 className="signup-title">Join the Meeska Family</h2>
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

            <a
              href="https://www.instagram.com/eatmeeska"
              target="_blank"
              rel="noopener noreferrer"
              className="signup-instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow us on Instagram
            </a>

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
