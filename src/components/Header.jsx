import { useContext, useState } from 'react';

import Button from './UI/Button.jsx';
import logoImg from '../assets/logo.jpg';
import CartContext from '../store/cartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import ThemeContext from '../store/ThemeContext.jsx';
import SearchModal from './SearchModal.jsx';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const themeCtx = useContext(ThemeContext);
  const [showSearchModal, setShowSearchModal] = useState(false);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  function handleShowWishlist() {
    userProgressCtx.showWishlist();
  }

  function handleToggleTheme() {
    themeCtx.toggleTheme();
  }

  function handleOpenSearch() {
    setShowSearchModal(true);
  }

  function handleCloseSearch() {
    setShowSearchModal(false);
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A restaurant" />
          <h1>ReactFood</h1>
        </div>
        
        <div className="header-controls">
          <div className="search-container">
            <Button textOnly onClick={handleOpenSearch} className="search-btn">
              🔍 Search
            </Button>
          </div>
          
          <nav className="header-nav">
            <Button textOnly onClick={handleToggleTheme} className="theme-toggle">
              {themeCtx.isDarkMode ? '☀️' : '🌙'}
            </Button>
            
            <Button textOnly onClick={handleShowWishlist} className="wishlist-btn">
              ❤️ Wishlist ({cartCtx.wishlist.length})
            </Button>
            
            <Button textOnly onClick={handleShowCart} className="cart-btn">
              🛒 Cart ({cartCtx.totalItems})
            </Button>
          </nav>
        </div>
      </header>
      
      {showSearchModal && (
        <SearchModal onClose={handleCloseSearch} />
      )}
    </>
  );
}