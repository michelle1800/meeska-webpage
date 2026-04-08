import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './FrozenBites.css';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    question: 'Does Meeska use any artificial flavors?',
    answer: 'We take pride in never using artificial flavors or colors in any of our products.',
  },
  {
    question: 'What makes Meeska unique?',
    answer:
      'Meeska is a first-of-its-kind high-protein dairy snack. While farmer cheese has been enjoyed for generations, it\'s traditionally sold as a bulk ingredient, not something designed to grab, eat, and enjoy on the go. Meeska changes that. We\'ve reimagined it into a smooth, creamy, single-serve snack with a customizable flavor experience. It\'s not yogurt, not cottage cheese, and not a protein bar. It\'s an entirely new category that combines real dairy, naturally high protein, and a more fun, personalized way to eat.',
  },
  {
    question: 'How much fat does Meeska have?',
    answer: '10g of total fat and 6g of saturated per serving, making it a reduced-fat dairy option.',
  },
];

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = useCallback((index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

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
        <section className="faq-hero">
          <div className="faq-hero-overlay">
            <span className="recipe-hero-eyebrow">SUPPORT</span>
            <h1 className="recipe-hero-title">Frequently Asked Questions</h1>
          </div>
        </section>

        <section className="recipe-detail">
          <div className="recipe-detail-content">
            <p className="recipe-detail-intro">
              Have questions about Meeska? We've got answers.
            </p>

            <div className="faq-list">
              {FAQ_ITEMS.map((item, i) => (
                <div className={`faq-page-item${openFaq === i ? ' faq-page-open' : ''}`} key={item.question}>
                  <button className="faq-page-question" onClick={() => toggleFaq(i)}>
                    <span>{item.question}</span>
                    <span className="faq-page-chevron">{openFaq === i ? '\u2212' : '+'}</span>
                  </button>
                  <div className="faq-page-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
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

export default FAQ;
