import { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext({
  items: [],
  wishlist: [],
  savedCarts: [],
  totalItems: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  addToWishlist: (item) => {},
  removeFromWishlist: (id) => {},
  moveToCart: (item) => {},
  saveCart: (name) => {},
  loadCart: (cartId) => {},
  updateQuantity: (id, quantity) => {},
});

function cartReducer(state, action) {
  let updatedState = { ...state };

  switch (action.type) {
    case 'ADD_ITEM': {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + (action.quantity || 1),
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: action.quantity || 1 });
      }

      updatedState = { ...state, items: updatedItems };
      break;
    }

    case 'REMOVE_ITEM': {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      
      if (existingCartItemIndex === -1) break;
      
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItems = [...state.items];

      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      updatedState = { ...state, items: updatedItems };
      break;
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.id
          ? { ...item, quantity: Math.max(0, action.quantity) }
          : item
      ).filter(item => item.quantity > 0);

      updatedState = { ...state, items: updatedItems };
      break;
    }

    case 'CLEAR_CART': {
      updatedState = { ...state, items: [] };
      break;
    }

    case 'ADD_TO_WISHLIST': {
      const existingWishlistItem = state.wishlist.find(
        item => item.id === action.item.id
      );
      
      if (!existingWishlistItem) {
        updatedState = {
          ...state,
          wishlist: [...state.wishlist, action.item]
        };
      }
      break;
    }

    case 'REMOVE_FROM_WISHLIST': {
      const updatedWishlist = state.wishlist.filter(
        item => item.id !== action.id
      );
      updatedState = { ...state, wishlist: updatedWishlist };
      break;
    }

    case 'MOVE_TO_CART': {
      const item = state.wishlist.find(item => item.id === action.item.id);
      if (item) {
        const updatedWishlist = state.wishlist.filter(
          wishlistItem => wishlistItem.id !== action.item.id
        );
        const existingCartItemIndex = state.items.findIndex(
          cartItem => cartItem.id === action.item.id
        );
        
        let updatedItems = [...state.items];
        
        if (existingCartItemIndex > -1) {
          updatedItems[existingCartItemIndex].quantity += 1;
        } else {
          updatedItems.push({ ...item, quantity: 1 });
        }

        updatedState = {
          ...state,
          items: updatedItems,
          wishlist: updatedWishlist
        };
      }
      break;
    }

    case 'SAVE_CART': {
      const newSavedCart = {
        id: Date.now().toString(),
        name: action.name,
        items: [...state.items],
        createdAt: new Date().toISOString(),
        totalAmount: state.items.reduce((total, item) => total + item.price * item.quantity, 0)
      };
      
      updatedState = {
        ...state,
        savedCarts: [...state.savedCarts, newSavedCart]
      };
      break;
    }

    case 'LOAD_CART': {
      const savedCart = state.savedCarts.find(cart => cart.id === action.cartId);
      if (savedCart) {
        updatedState = { ...state, items: [...savedCart.items] };
      }
      break;
    }

    case 'LOAD_FROM_STORAGE': {
      updatedState = { ...state, ...action.data };
      break;
    }

    default:
      return state;
  }

  // Calculate totals
  const totalItems = updatedState.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = updatedState.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    ...updatedState,
    totalItems,
    totalAmount
  };
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    wishlist: [],
    savedCarts: [],
    totalItems: 0,
    totalAmount: 0
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCartData = localStorage.getItem('reactFood-cart');
    if (savedCartData) {
      try {
        const parsedData = JSON.parse(savedCartData);
        dispatchCartAction({ type: 'LOAD_FROM_STORAGE', data: parsedData });
      } catch (error) {
        console.error('Failed to load cart from storage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('reactFood-cart', JSON.stringify({
      items: cart.items,
      wishlist: cart.wishlist,
      savedCarts: cart.savedCarts
    }));
  }, [cart.items, cart.wishlist, cart.savedCarts]);

  function addItem(item, quantity = 1) {
    dispatchCartAction({ type: 'ADD_ITEM', item, quantity });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  function updateQuantity(id, quantity) {
    dispatchCartAction({ type: 'UPDATE_QUANTITY', id, quantity });
  }

  function addToWishlist(item) {
    dispatchCartAction({ type: 'ADD_TO_WISHLIST', item });
  }

  function removeFromWishlist(id) {
    dispatchCartAction({ type: 'REMOVE_FROM_WISHLIST', id });
  }

  function moveToCart(item) {
    dispatchCartAction({ type: 'MOVE_TO_CART', item });
  }

  function saveCart(name) {
    if (cart.items.length > 0) {
      dispatchCartAction({ type: 'SAVE_CART', name });
    }
  }

  function loadCart(cartId) {
    dispatchCartAction({ type: 'LOAD_CART', cartId });
  }

  const cartContext = {
    items: cart.items,
    wishlist: cart.wishlist,
    savedCarts: cart.savedCarts,
    totalItems: cart.totalItems,
    totalAmount: cart.totalAmount,
    addItem,
    removeItem,
    clearCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    saveCart,
    loadCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;