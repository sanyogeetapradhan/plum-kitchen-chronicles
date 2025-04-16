import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Breakfast',
    description: 'Start your morning with energy.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', // Breakfast Image URL
    suggestions: ['Avocado Toast', 'Smoothie Bowl', 'Pancakes'],
    path: '/categories/breakfast',
  },
  {
    name: 'Lunch',
    description: 'Refuel with hearty noon meals.',
    image: 'https://unsplash.com/photos/assorted-foods-on-stainless-steel-tray-wClFKcjhNcI?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash', // Fixed Lunch Image URL
    suggestions: ['Grilled Wrap', 'Quinoa Salad', 'Burrito Bowl'],
    path: '/categories/lunch',
  },
  {
    name: 'Dinner',
    description: 'Wholesome and satisfying evening food.',
    image: 'https://images.pexels.com/photos/2276674/pexels-photo-2276674.jpeg', // Dinner Image URL
    suggestions: ['Pasta Alfredo', 'Tacos', 'Rice Bowl'],
    path: '/categories/dinner',
  },
  {
    name: 'Desserts',
    description: 'End your day on a sweet note.',
    image: 'https://images.pexels.com/photos/4107688/pexels-photo-4107688.jpeg', // Desserts Image URL
    suggestions: ['Brownies', 'Fruit Tart', 'Ice Cream'],
    path: '/categories/desserts',
  },
  {
    name: 'Drinks',
    description: 'Refresh, energize, or chill.',
    image: 'https://images.pexels.com/photos/2152490/pexels-photo-2152490.jpeg', // Drinks Image URL
    suggestions: ['Iced Latte', 'Smoothies', 'Fruit Punch'],
    path: '/categories/drinks',
  },
  {
    name: 'Snacks',
    description: 'Tasty treats anytime.',
    image: 'https://images.pexels.com/photos/3965484/pexels-photo-3965484.jpeg', // Snacks Image URL
    suggestions: ['Nachos', 'Fries', 'Dips & Crackers'],
    path: '/categories/snacks',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const Categories: React.FC = () => {
  return (
    <div className="container-main py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-white mb-2"
      >
        Explore Categories
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-plum-300 mb-10"
      >
        Find the perfect recipes and plan your week with ease.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            className="bg-plum-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-white">{cat.name}</h2>
                <Link to={cat.path} className="text-sm text-plum-300 hover:text-white">
                  View All →
                </Link>
              </div>
              <p className="text-sm text-plum-300">{cat.description}</p>
              <div>
                <p className="text-white font-medium">Suggestions:</p>
                <ul className="text-sm text-plum-300 list-disc list-inside">
                  {cat.suggestions.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button className="mt-4 bg-plum-700 hover:bg-plum-600 text-white w-full">
                Add to Planner
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
