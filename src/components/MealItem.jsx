import { useContext, useState } from 'react';
import { currencyFormatter } from '../util/formatting.js';  
import Button from './UI/Button.jsx';
import CartContext from '../store/cartContext.jsx';
import NotificationContext from '../store/NotificationContext.jsx';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const notificationCtx = useContext(NotificationContext);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(
    cartCtx.wishlist.some(item => item.id === meal.id)
  );

  function handleAddMealToCart() {
    cartCtx.addItem(meal, quantity);
    notificationCtx.addNotification({
      type: 'success',
      icon: '🛒',
      title: 'Added to Cart!',
      message: `${meal.name} has been added to your cart`,
      duration: 3000
    });
  }

  function handleToggleWishlist() {
    if (isInWishlist) {
      cartCtx.removeFromWishlist(meal.id);
      setIsInWishlist(false);
      notificationCtx.addNotification({
        type: 'info',
        icon: '💔',
        title: 'Removed from Wishlist',
        message: `${meal.name} has been removed from wishlist`,
        duration: 2000
      });
    } else {
      cartCtx.addToWishlist(meal);
      setIsInWishlist(true);
      notificationCtx.addNotification({
        type: 'success',
        icon: '❤️',
        title: 'Added to Wishlist!',
        message: `${meal.name} has been added to your wishlist`,
        duration: 2000
      });
    }
  }

  const rating = meal.rating || 4.5;
  const reviewCount = meal.reviewCount || Math.floor(Math.random() * 100) + 10;

  return (
    <li className="meal-item">
      <article className="meal-card">
        <div className="meal-image-container">
          <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
          <button 
            className={`wishlist-toggle ${isInWishlist ? 'in-wishlist' : ''}`}
            onClick={handleToggleWishlist}
            title={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isInWishlist ? '❤️' : '🤍'}
          </button>
          {meal.isNew && <span className="new-badge">NEW</span>}
          {meal.isPopular && <span className="popular-badge">🔥 POPULAR</span>}
        </div>
        
        <div className="meal-content">
          <div className="meal-header">
            <h3>{meal.name}</h3>
            <div className="meal-rating">
              <span className="stars">{'⭐'.repeat(Math.floor(rating))}</span>
              <span className="rating-text">{rating} ({reviewCount})</span>
            </div>
          </div>
          
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
          
          {meal.tags && (
            <div className="meal-tags">
              {meal.tags.map(tag => (
                <span key={tag} className="meal-tag">{tag}</span>
              ))}
            </div>
          )}
          
          <div className="meal-item-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                +
              </button>
            </div>
            
            <Button onClick={handleAddMealToCart} className="add-to-cart-btn">
              Add to Cart
            </Button>
          </div>
        </div>
      </article>
    </li>
  );
}