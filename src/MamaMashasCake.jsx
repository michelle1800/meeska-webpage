import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FrozenBites.css';
import cakeImg from './assets/mama-mashas-cake.jpeg';

function MamaMashasCake() {
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
            src={cakeImg}
            alt="Mama Masha's Cake, Zapekanka"
            className="recipe-hero-img"
          />
          <div className="recipe-hero-overlay">
            <span className="recipe-hero-eyebrow">RECIPE</span>
            <h1 className="recipe-hero-title">Mama Masha's Cake</h1>
            <p className="recipe-hero-subtitle">Zapekanka: Baked Farmer Cheese Cake</p>
          </div>
        </section>

        <section className="recipe-detail">
          <div className="recipe-detail-content">
            <p className="recipe-detail-intro">
              A beloved Eastern European classic, somewhere between a soufflé and a
              cheesecake, golden on the outside, pillowy soft inside. My Mama's Recipe!
            </p>

            <div className="recipe-detail-single">
              <div className="recipe-detail-main">
                <div className="recipe-detail-block">
                  <h2>Ingredients</h2>
                  <ul className="recipe-ingredients">
                    <li>2 cups Meeska farmer cheese</li>
                    <li>3 eggs</li>
                    <li>3 tablespoons honey or sugar</li>
                    <li>1 teaspoon vanilla extract</li>
                    <li>3 tablespoons semolina or fine farina</li>
                    <li>1/3 cup sour cream</li>
                    <li>1 teaspoon lemon zest</li>
                    <li>1 pinch of salt</li>
                    <li>1/3 cup raisins or fresh berries (optional)</li>
                    <li>1 tablespoon butter (for greasing)</li>
                    <li>1/3 cup sour cream or jam, for serving</li>
                  </ul>
                </div>

                <div className="recipe-detail-block">
                  <h2>Steps</h2>
                  <ol className="recipe-steps">
                    <li>
                      <strong>Preheat &amp; prep:</strong> Preheat your oven to 350°F (175°C).
                      Grease an 8-inch round baking dish or springform pan generously with butter,
                      then dust lightly with semolina or breadcrumbs to prevent sticking.
                    </li>
                    <li>
                      <strong>Separate the eggs:</strong> Separate the eggs into two bowls. Set the
                      whites aside. You'll whip these separately for a lighter texture.
                    </li>
                    <li>
                      <strong>Make the base:</strong> In a large bowl, combine the Meeska farmer
                      cheese, egg yolks, honey or sugar, vanilla extract, sour cream, lemon zest,
                      and a pinch of salt. Mix until smooth and well combined. Stir in the semolina
                      and fold in raisins or fresh berries if using. Let sit for 5 minutes so the
                      semolina begins to absorb.
                    </li>
                    <li>
                      <strong>Whip the whites:</strong> Using a hand mixer or stand mixer, beat the
                      egg whites on medium-high until stiff peaks form. They should hold their shape
                      when you lift the whisk. This is what gives zapekanka its signature light,
                      almost soufflé-like texture.
                    </li>
                    <li>
                      <strong>Fold &amp; fill:</strong> Gently fold the whipped egg whites into the
                      cheese mixture in two additions, using a wide spatula and slow, sweeping
                      motions. Don't overmix. You want to keep as much air as possible. Pour the
                      batter into your prepared pan and smooth the top.
                    </li>
                    <li>
                      <strong>Bake:</strong> Bake on the center rack for 40–45 minutes, until the top
                      is deep golden and the center is just set (a gentle jiggle is okay, it will
                      firm as it cools). Do not open the oven door in the first 30 minutes.
                    </li>
                    <li>
                      <strong>Cool &amp; serve:</strong> Let the zapekanka cool in the pan for at
                      least 20 minutes before slicing. It deflates slightly as it cools, which is
                      completely normal and part of its charm. Serve warm or at room temperature with
                      a spoonful of sour cream or jam.
                    </li>
                  </ol>
                </div>

                <div className="recipe-detail-block recipe-notes">
                  <h2>Notes</h2>
                  <p>
                    <strong>The texture secret:</strong> Don't skip separating the eggs and whipping
                    the whites. It's what separates a great zapekanka from a dense one. Traditional
                    recipes skip this step, but it makes all the difference.
                  </p>
                  <p>
                    <strong>Make it yours:</strong> Add a thin layer of jam on top before baking for
                    a glossy finish, or swirl in a spoonful of blueberry preserves before it goes in
                    the oven.
                  </p>
                  <p>
                    <strong>Storage:</strong> Keeps in the fridge for up to 3 days. Tastes even
                    better the next morning, cold, with black tea.
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

export default MamaMashasCake;
