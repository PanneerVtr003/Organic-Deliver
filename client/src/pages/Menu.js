import React, { useState } from 'react';
import FoodCard from '../components/FoodCard';
import { mockCategories } from '../data/mockData';
import { Filter } from 'lucide-react';
import './Menu.css';

const Menu = ({ foods }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredFoods = selectedCategory === 'all' 
    ? foods 
    : foods.filter(food => food.category === selectedCategory);

  const sortedFoods = [...filteredFoods].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="menu-page">
      <div className="container">
        <h1 className="section-title">Our Menu</h1>
        
        <div className="menu-controls">
          <button className="filter-toggle" onClick={toggleFilters}>
            <Filter size={20} />
            Filters
          </button>
          
          <div className={`filter-panel ${showFilters ? 'active' : ''}`}>
            <div className="filter-group">
              <h3>Categories</h3>
              <div className="category-buttons">
                {mockCategories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <h3>Sort By</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {sortedFoods.length > 0 ? (
            sortedFoods.map(food => (
              <FoodCard key={food._id} food={food} />
            ))
          ) : (
            <div className="no-items">
              <h3>No items found in this category.</h3>
              <p>Try selecting a different category or check back later for new items.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;