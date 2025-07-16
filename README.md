# 🍽️ ReactFood - Modern Online Restaurant

A modern, feature-rich online restaurant application built with React and Node.js, featuring dark mode, advanced search, wishlist functionality, and a beautiful user interface.

## 🌟 Features

### 🛒 **Advanced Shopping Cart**
- Add/remove items with quantity controls
- Persistent cart storage (localStorage)
- Real-time cart total calculations
- Smooth animations and transitions

### ❤️ **Wishlist System**
- Save favorite meals for later
- Move items from wishlist to cart
- Persistent wishlist storage
- Beautiful wishlist modal interface

### 🌙 **Dark/Light Theme**
- Toggle between dark and light modes
- Automatic theme persistence
- Smooth theme transitions
- Modern CSS custom properties

### 🔍 **Advanced Search & Filters**
- Real-time search functionality
- Category-based filtering
- Price range filtering
- Responsive search modal

### 🔔 **Toast Notifications**
- Success, error, warning, and info notifications
- Auto-dismiss functionality
- Smooth slide-in animations
- User-friendly feedback system

### 📱 **Responsive Design**
- Mobile-first approach
- Touch-friendly interactions
- Adaptive layouts
- Cross-device compatibility

### 🎨 **Modern UI/UX**
- Card-based meal design
- Hover animations and effects
- Rating and review displays
- Modern button styles with gradients
- Custom scrollbars

## 🚀 Demo

🌐 **Live Demo**: [ReactFood on GitHub Pages](https://yaswanththottempudi.github.io/Online_Restaurant/)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YASWANTHthottempudi/Online_Restaurant.git
   cd Online_Restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```

   The backend API will be available at `http://localhost:3000`

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

## 🎨 Design Features

- **Modern Color Palette**: Orange-based primary colors with complementary accents
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Custom Scrollbars**: Themed scrollbar styling
- **Hover Effects**: Interactive element feedback
- **Shadow System**: Consistent elevation design

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### GitHub Pages Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

**Live URL**: [https://yaswanththottempudi.github.io/Online_Restaurant/](https://yaswanththottempudi.github.io/Online_Restaurant/)

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yaswanth Thottempudi**
- GitHub: [@YASWANTHthottempudi](https://github.com/YASWANTHthottempudi)
- Email: [your-email@example.com]

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- All open-source contributors

---

## 🔄 Recent Updates

- ✅ Added dark/light theme toggle
- ✅ Implemented wishlist functionality
- ✅ Enhanced search and filtering
- ✅ Added toast notifications
- ✅ Improved responsive design
- ✅ Enhanced cart management
- ✅ Modern UI/UX improvements

---

⭐ **Don't forget to star this repository if you found it helpful!**
