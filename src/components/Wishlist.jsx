import { useContext } from 'react';
import Modal from './UI/Modal.jsx';
import CartContext from '../store/cartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import Button from './UI/Button.jsx';
import { currencyFormatter } from '../util/formatting.js';

export default function Wishlist() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleCloseWishlist() {
    userProgressCtx.hideWishlist();
  }

  function handleMoveToCart(item) {
    cartCtx.moveToCart(item);
  }

  function handleRemoveFromWishlist(id) {
    cartCtx.removeFromWishlist(id);
  }

  return (
    <Modal
      className="wishlist"
      open={userProgressCtx.progress === 'wishlist'}
      onClose={handleCloseWishlist}
    >
      <div className="wishlist-header">
        <h2>❤️ Your Wishlist</h2>
        <p className="wishlist-count">{cartCtx.wishlist.length} items</p>
      </div>
      
      {cartCtx.wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
          <p>Add some delicious meals to your wishlist!</p>
        </div>
      ) : (
        <ul className="wishlist-items">
          {cartCtx.wishlist.map((item) => (
            <li key={item.id} className="wishlist-item">
              <div className="wishlist-item-image">
                <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
              </div>
              <div className="wishlist-item-details">
                <h3>{item.name}</h3>
                <p className="wishlist-item-price">{currencyFormatter.format(item.price)}</p>
                <p className="wishlist-item-description">{item.description}</p>
              </div>
              <div className="wishlist-item-actions">
                <Button onClick={() => handleMoveToCart(item)} className="move-to-cart-btn">
                  Add to Cart
                </Button>
                <Button 
                  textOnly 
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  className="remove-wishlist-btn"
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseWishlist}>
          Close
        </Button>
      </p>
    </Modal>
  );
}
