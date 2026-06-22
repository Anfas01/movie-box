import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ favorites = [] }) {
  const location = useLocation();

  // Dynamically switches placeholders based on the active page
  const searchPlaceholder = location.pathname === '/favorites' 
    ? 'Search for your favorite movies...' 
    : 'Search for movies...';

  return (
    <header className="header">
      <div className="header-brand">
        <NavLink to="/">🎬 MovieBox</NavLink>
      </div>

      <div className="search-bar">
        <input type="text" placeholder={searchPlaceholder} />
        <button className='search-button'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <nav className="header-nav">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className="nav-link">
              Favorites (
              <span key={favorites.length} className="fav-count">
                {favorites.length}
              </span>)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;