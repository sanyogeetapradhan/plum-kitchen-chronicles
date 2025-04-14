import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type Category = {
  name: string;
  description: string;
  image: string;
  suggestions: string[];
  path: string;
};

const categories: Category[] = [
  {
    name: 'Breakfast',
    description: 'Kickstart your day with delicious energy-packed recipes.',
    image: 'https://source.unsplash.com/800x600/?breakfast,food',
    suggestions: ['Avocado Toast', 'Pancakes', 'Smoothie Bowl'],
    path: '/categories/breakfast',
  },
  {
    name: 'Lunch',
    description: 'Quick and hearty meals to keep you going through the day.',
    image: 'https://source.unsplash.com/800x600/?lunch,meal',
    suggestions: ['Grilled Sandwich', 'Buddha Bowl', 'Chicken Wrap'],
    path: '/categories/lunch',
  },
  {
    name: 'Dinner',
    description: 'Comforting dinners to end your day on a satisfying note.',
    image: 'https://source.unsplash.com/800x600/?dinner,plate',
    suggestions: ['Pasta', 'Stir Fry', 'Biryani'],
    path: '/categories/dinner',
  },
  {
    name: 'Desserts',
    description: 'End every meal on a sweet note with these treats.',
    image: 'https://source.unsplash.com/800x600/?dessert,cake',
    suggestions: ['Chocolate Lava Cake', 'Fruit Tart', 'Ice Cream'],
    path: '/categories/desserts',
  },
  {
    name: 'Drinks',
    description: 'Sip on something refreshing, energizing, or relaxing.',
    image: 'https://source.unsplash.com/800x600/?drinks,beverage',
    suggestions: ['Mango Smoothie', 'Iced Coffee', 'Mocktails'],
    path: '/categories/drinks',
  },
  {
    name: 'Snacks',
    description: 'Quick bites to curb your cravings anytime.',
    image: 'https://source.unsplash.com/800x600/?snacks,food',
    suggestions: ['Nachos', 'Veggie Chips', 'Hummus & Pita'],
    path: '/categories/snacks',
  },
];

const Categories: React.FC = () => {
  return (
    <div className="container-main py-12">
      <h1 className="text-4xl font-bold text-white mb-4">Explore Categories</h1>
      <p className="text-lg text-plum-300 mb-10">Find the perfect recipes by category and start planning!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-plum-800 border border-plum-600 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold text-white">{cat.name}</h2>
                <Link to={cat.path} className="text-sm text-plum-300 hover:text-white">
                  View All →
                </Link>
              </div>
              <p className="text-sm text-plum-300 mb-4">{cat.description}</p>

              <div>
                <p className="text-white font-medium mb-2">Suggestions:</p>
                <ul className="text-sm text-plum-300 list-disc list-inside space-y-1">
                  {cat.suggestions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <Button
                variant="secondary"
                className="mt-6 bg-plum-700 hover:bg-plum-600 text-white"
              >
                Add to Planner
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
