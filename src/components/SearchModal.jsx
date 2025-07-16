import { useState, useEffect, useContext } from 'react';
import Modal from './UI/Modal.jsx';
import Button from './UI/Button.jsx';
import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

export default function SearchModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  const { data: meals = [] } = useHttp('http://localhost:3000/meals', {}, []);

  const categories = ['all', 'appetizer', 'main', 'dessert', 'drink'];

  useEffect(() => {
    if (!meals.length) return;

    let filtered = meals.filter(meal => {
      const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           meal.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || meal.category === selectedCategory;
      const matchesPrice = meal.price >= priceRange[0] && meal.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    setFilteredMeals(filtered);
  }, [searchTerm, selectedCategory, priceRange, meals]);

  return (
    <Modal open={true} onClose={onClose} className="search-modal">
      <div className="search-header">
        <h2>🔍 Search Menu</h2>
        <Button textOnly onClick={onClose} className="close-btn">×</Button>
      </div>

      <div className="search-filters">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search for meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-row">
          <div className="category-filter">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="price-filter">
            <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <div className="price-range-inputs">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                className="price-slider"
              />
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                className="price-slider"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="search-results">
        <p className="results-count">{filteredMeals.length} meals found</p>
        
        {filteredMeals.length === 0 ? (
          <div className="no-results">
            <p>No meals found matching your criteria</p>
            <p>Try adjusting your search or filters</p>
          </div>
        ) : (
          <ul className="search-results-list">
            {filteredMeals.map(meal => (
              <MealItem key={meal.id} meal={meal} />
            ))}
          </ul>
        )}
      </div>
    </Modal>
  );
}
