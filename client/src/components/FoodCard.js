import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './FoodCard.css';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="food-card">
      <div className="food-image-container">
        <img src={food.image} alt={food.name} className="food-image" />
        {food.organic && <span className="organic-badge">Organic</span>}
        <button className="add-to-cart-btn" onClick={handleAddToCart} aria-label="Add to cart">
          <Plus size={20} />
        </button>
      </div>
      <div className="food-info">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        <div className="food-meta">
          <div className="food-rating">
            <Star size={16} fill="currentColor" />
            <span>{food.rating}</span>
            <span>({food.reviews})</span>
          </div>
          <span className="food-price">${food.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;