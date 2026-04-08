import './About.css';
import { Link } from 'react-router-dom';
import strawberryImg from './assets/meeska-strawberry.jpeg';
import blueberryImg from './assets/meeska-blueberry.jpeg';
import cinnamonImg from './assets/meeska-cinnamon.jpeg';
import originalImg from './assets/meeska-original.jpeg';

const FLAVORS = [
  { name: 'Sweet Strawberry', img: strawberryImg, colorClass: 'flavor-strawberry' },
  { name: 'Wild Blueberry', img: blueberryImg, colorClass: 'flavor-blueberry' },
  { name: 'Cinnamon Brown Sugar', img: cinnamonImg, colorClass: 'flavor-cinnamon' },
  { name: 'Original', img: originalImg, colorClass: 'flavor-original' },
];

function About() {
  return (
    <div className="about-page">
      <header className="about-nav">
        <Link to="/" className="about-logo-text">
          <div className="hero-logo-text">
            <span className="hero-logo-name">Meeska</span>
            <span className="hero-logo-tagline">High Protein Dairy Snack</span>
          </div>
        </Link>
      </header>

      <h1 className="about-title">The Story of Meeska</h1>

      <p className="about-description">
        Meeska was created with one simple goal: to make a dairy snack that is
        wholesome, clean, and ridiculously tasty. Our farmer's cheese blends real
        ingredients with bold flavors to give you something that feels nostalgic,
        comforting, and genuinely good for you.
      </p>

      <h2 className="about-subtitle">Our Flavors</h2>

      <div className="about-flavor-grid">
        {FLAVORS.map((flavor) => (
          <div className={`about-flavor-card ${flavor.colorClass}`} key={flavor.name}>
            <img
              src={flavor.img}
              alt={`Meeska ${flavor.name}`}
              className="about-flavor-img"
            />
            <h3>{flavor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
