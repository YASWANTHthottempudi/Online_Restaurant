import { createContext, useState } from 'react';

const UserProgressContext = createContext({
  progress: '', // 'cart', 'checkout', 'wishlist', 'search', 'profile'
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showWishlist: () => {},
  hideWishlist: () => {},
  showSearch: () => {},
  hideSearch: () => {},
  closeAll: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function showCart() {
    setUserProgress('cart');
  }

  function hideCart() {
    setUserProgress('');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideCheckout() {
    setUserProgress('');
  }

  function showWishlist() {
    setUserProgress('wishlist');
  }

  function hideWishlist() {
    setUserProgress('');
  }

  function showSearch() {
    setUserProgress('search');
  }

  function hideSearch() {
    setUserProgress('');
  }

  function closeAll() {
    setUserProgress('');
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showWishlist,
    hideWishlist,
    showSearch,
    hideSearch,
    closeAll,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;