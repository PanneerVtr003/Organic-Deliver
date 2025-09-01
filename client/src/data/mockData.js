// First, import all your images
import vegetableBox from '../assets/Organic Vegetable Box.jpeg';
import fruitBasket from '../assets/Fresh Fruit Basket.jpg';
import farmEggs from '../assets/Farm Fresh Eggs.jpeg';
import artisanBread from '../assets/Artisan Bread.jpeg';
import chickenBreast from '../assets/Organic Chicken Breast.jpeg';
import salmon from '../assets/Wild Caught Salmon.jpeg';
import saladGreens from '../assets/Mixed Salad Greens.jpeg';
import greekYogurt from '../assets/Greek Yogurt.jpeg';

export const mockFoods = [
  {
    _id: '1',
    name: 'Organic Vegetable Box',
    description: 'A selection of fresh, seasonal organic vegetables delivered straight to your door.',
    price: 24.99,
    image: vegetableBox, // Use the imported image
    category: 'vegetables',
    organic: true,
    rating: 4.8,
    reviews: 124
  },
  {
    _id: '2',
    name: 'Fresh Fruit Basket',
    description: 'A colorful assortment of organic fruits, perfect for a healthy breakfast or snack.',
    price: 29.99,
    image: fruitBasket, // Use the imported image
    category: 'fruits',
    organic: true,
    rating: 4.9,
    reviews: 98
  },
  {
    _id: '3',
    name: 'Farm Fresh Eggs',
    description: 'Free-range eggs from happy chickens raised on organic feed.',
    price: 6.99,
    image: farmEggs, // Use the imported image
    category: 'dairy',
    organic: true,
    rating: 4.7,
    reviews: 203
  },
  {
    _id: '4',
    name: 'Artisan Bread',
    description: 'Handcrafted bread made with organic flour and natural fermentation.',
    price: 5.99,
    image: artisanBread, // Use the imported image
    category: 'bakery',
    organic: true,
    rating: 4.6,
    reviews: 87
  },
  {
    _id: '5',
    name: 'Organic Chicken Breast',
    description: 'Free-range chicken breast raised without antibiotics or hormones.',
    price: 12.99,
    image: chickenBreast, // Use the imported image
    category: 'meat',
    organic: true,
    rating: 4.8,
    reviews: 156
  },
  {
    _id: '6',
    name: 'Wild Caught Salmon',
    description: 'Sustainable, wild-caught salmon fillets, flash frozen at sea.',
    price: 18.99,
    image: salmon, // Use the imported image
    category: 'seafood',
    organic: false,
    rating: 4.9,
    reviews: 112
  },
  {
    _id: '7',
    name: 'Mixed Salad Greens',
    description: 'A blend of tender organic greens perfect for salads and sandwiches.',
    price: 4.99,
    image: saladGreens, // Use the imported image
    category: 'vegetables',
    organic: true,
    rating: 4.5,
    reviews: 76
  },
  {
    _id: '8',
    name: 'Greek Yogurt',
    description: 'Creamy organic Greek yogurt made from grass-fed cows.',
    price: 3.99,
    image: greekYogurt, // Use the imported image
    category: 'dairy',
    organic: true,
    rating: 4.7,
    reviews: 189
  }
];

export const mockCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'vegetables', name: 'Fresh Vegetables' },
  { id: 'fruits', name: 'Seasonal Fruits' },
  { id: 'dairy', name: 'Dairy & Eggs' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'meat', name: 'Meat' },
  { id: 'seafood', name: 'Seafood' }
];