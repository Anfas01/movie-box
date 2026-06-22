import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header({ favorites }) {
  const location = useLocation();
  const [query, setQuery] = useState('');

  const searchPlaceholder = location.pathname === '/favorites'
    ? 'Search for your favorite movies...'
    : 'Search for movies...';

  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header-brand">
        <NavLink to="/">🎬 MovieBox</NavLink>
      </div>

      {/* CHANGED: Converted from <div> to <form> to capture Enter key presses natively */}
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
        />
        <button type="submit" className='search-button'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

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