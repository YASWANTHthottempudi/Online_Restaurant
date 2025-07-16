import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import Wishlist from './components/Wishlist.jsx';
import NotificationContainer from './components/NotificationContainer.jsx';
import { CartContextProvider } from './store/cartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import { ThemeContextProvider } from './store/ThemeContext.jsx';
import { NotificationContextProvider } from './store/NotificationContext.jsx';

function App() {
  return (
    <ThemeContextProvider>
      <NotificationContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <Header />
            <main className="app-main">
              <Meals />
              <Cart />
              <Wishlist />
              <Checkout />
            </main>
            <NotificationContainer />
          </CartContextProvider>
        </UserProgressContextProvider>
      </NotificationContextProvider>
    </ThemeContextProvider>
  );
}

export default App;