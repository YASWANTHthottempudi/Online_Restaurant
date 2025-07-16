# 🍽️ ReactFood - Modern Online Restaurant

A modern, feature-rich online restaurant application built with React and Node.js, featuring dark mode, advanced search, wishlist functionality, and a beautiful user interface.


## 🚀 Demo

🌐 **Live Demo**: [ReactFood on GitHub Pages](https://yaswanththottempudi.github.io/Online_Restaurant/)



  

## 📁 Project Structure

```
Online_Restaurant/
├── public/
│   └── logo.jpg
├── src/
│   ├── components/
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   └── Modal.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   ├── Error.jsx
│   │   ├── Header.jsx
│   │   ├── MealItem.jsx
│   │   ├── Meals.jsx
│   │   ├── NotificationContainer.jsx
│   │   ├── SearchModal.jsx
│   │   └── Wishlist.jsx
│   ├── hooks/
│   │   └── useHttp.js
│   ├── store/
│   │   ├── cartContext.jsx
│   │   ├── NotificationContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── UserProgressContext.jsx
│   ├── util/
│   │   └── formatting.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── backend/
│   ├── data/
│   │   ├── available-meals.json
│   │   └── orders.json
│   ├── public/
│   │   └── images/
│   ├── app.js
│   └── package.json
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Technologies Used

### Frontend
- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **CSS Custom Properties** - Modern styling approach
- **Context API** - State management
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Data storage

## 🎯 Key Components

### Cart System
- **CartContext**: Manages cart state with advanced features
- **Cart.jsx**: Shopping cart modal interface
- **CartItem.jsx**: Individual cart item component

### Theme System
- **ThemeContext**: Handles dark/light mode switching
- **CSS Variables**: Dynamic theming support

### Search System
- **SearchModal.jsx**: Advanced search and filtering interface
- **Real-time filtering**: Instant search results

### Notification System
- **NotificationContext**: Toast notification management
- **Slide animations**: Smooth notification transitions




## 🚀 Deployment

### GitHub Pages Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

**Live URL**: [https://yaswanththottempudi.github.io/Online_Restaurant/](https://yaswanththottempudi.github.io/Online_Restaurant/)




