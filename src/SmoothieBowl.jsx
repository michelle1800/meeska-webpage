import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FrozenBites.css';
import smoothieBowlImg from './assets/smoothie-bowl.jpeg';

function SmoothieBowl() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <header className="hero-nav">
        <div className="hero-nav-left">
          <Link to="/" className="hero-logo-link">
            <div className="hero-logo-text">
              <span className="hero-logo-name">Meeska</span>
              <span className="hero-logo-tagline">High Protein Dairy Snack</span>
            </div>
          </Link>
        </div>
        <nav className="hero-nav-right">
          <Link to="/" className="hero-nav-back">&larr; Back to Home</Link>
        </nav>
      </header>

      <main className="recipe-page">
        <section className="recipe-hero">
          <img
            src={smoothieBowlImg}
            alt="Meeska Farmer Cheese Smoothie Bowl"
            className="recipe-hero-img"
          />
          <div className="recipe-hero-overlay">
            <span className="recipe-hero-eyebrow">RECIPE</span>
            <h1 className="recipe-hero-title">Meeska Farmer Cheese Smoothie Bowl</h1>
          </div>
        </section>

        <section className="recipe-detail">
          <div className="recipe-detail-content">
            <p className="recipe-detail-intro">
              Thick, creamy, and packed with protein. This smoothie bowl uses two full cups
              of Meeska as the base for a breakfast that actually keeps you full.
            </p>

            <div className="recipe-detail-single">
              <div className="recipe-detail-main">
                <div className="recipe-detail-block">
                  <h2>Ingredients</h2>
                  <ul className="recipe-ingredients">
                    <li>2 cups Meeska farmer cheese</li>
                    <li>1 frozen banana</li>
                    <li>1/2 cup frozen mixed berries</li>
                    <li>2 tablespoons honey or maple syrup</li>
                    <li>1/2 teaspoon vanilla extract</li>
                    <li>2 tablespoons milk or oat milk (only if needed to blend)</li>
                    <li>1/3 cup granola</li>
                    <li>1/3 cup fresh blueberries</li>
                    <li>1/3 cup fresh strawberries, sliced</li>
                    <li>1 banana, sliced</li>
                    <li>1 tablespoon drizzle of honey</li>
                    <li>2 teaspoons chia seeds (optional)</li>
                  </ul>
                </div>

                <div className="recipe-detail-block">
                  <h2>Steps</h2>
                  <ol className="recipe-steps">
                    <li>
                      <strong>Blend the base:</strong> Add the Meeska farmer cheese, frozen banana,
                      frozen mixed berries, honey or maple syrup, and vanilla extract to a high-speed
                      blender. Blend on high for 30–45 seconds until completely smooth and thick. The
                      mixture should be dense enough to hold a spoon upright. If it's too thick to
                      blend, add milk or oat milk one tablespoon at a time.
                    </li>
                    <li>
                      <strong>Pour &amp; smooth:</strong> Divide the blended mixture evenly between
                      two wide bowls, smoothing the surface with the back of a spoon to create a flat
                      canvas for your toppings.
                    </li>
                    <li>
                      <strong>Top &amp; serve:</strong> Working from the center out, arrange fresh
                      blueberries, sliced strawberries, and sliced banana in rows or sections across
                      the top. Sprinkle granola along one edge for crunch, add chia seeds if using,
                      then finish with a slow drizzle of honey over everything.
                    </li>
                  </ol>
                </div>

                <div className="recipe-detail-block recipe-notes">
                  <h2>Notes</h2>
                  <p>
                    <strong>Keep it thick:</strong> The goal is a spoonable bowl, not a drinkable
                    smoothie. Add liquid one tablespoon at a time and only if your blender needs
                    help. The less you add, the thicker and creamier the result.
                  </p>
                  <p>
                    <strong>Swap the fruit:</strong> Mango and pineapple with a squeeze of lime
                    makes a tropical version. Peanut butter and frozen banana with cacao nibs on
                    top makes a dessert version.
                  </p>
                  <p>
                    <strong>Meal prep:</strong> Blend the base the night before and refrigerate.
                    Just add toppings fresh in the morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="footer-logo">Meeska</span>
            <span className="footer-logo-sub">High Protein Dairy Snack</span>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="mailto:contact@meeska.us">contact@meeska.us</a>
            <a href="https://www.instagram.com/eatmeeska" target="_blank" rel="noopener noreferrer" className="footer-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow us on Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2025, Meeska &middot; Privacy policy
        </div>
      </footer>
    </div>
  );
}

export default SmoothieBowl;
