
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, Award, Heart, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

type CategoryType = {
  id: number;
  name: string;
  count: number;
};

type PopularRecipeType = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

const categories: CategoryType[] = [
  { id: 1, name: 'Breakfast', count: 12 },
  { id: 2, name: 'Lunch', count: 18 },
  { id: 3, name: 'Dinner', count: 24 },
  { id: 4, name: 'Desserts', count: 15 },
  { id: 5, name: 'Vegan', count: 9 },
  { id: 6, name: 'Gluten-Free', count: 7 },
  { id: 7, name: '30-Minute Meals', count: 14 },
];

const popularRecipes: PopularRecipeType[] = [
  {
    id: 1,
    title: 'Creamy Mushroom Risotto',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371',
    slug: 'creamy-mushroom-risotto',
  },
  {
    id: 2,
    title: 'Lemon Garlic Roasted Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6',
    slug: 'lemon-garlic-roasted-chicken',
  },
  {
    id: 3,
    title: 'Chocolate Raspberry Tart',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
    slug: 'chocolate-raspberry-tart',
  },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Search */}
      <div className="bg-plum-800 rounded-xl p-4 glass-card card-hover">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search recipes..." 
            className="pl-10 bg-plum-700 border-plum-600 focus:border-plum-300"
          />
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-plum-800 rounded-xl p-5 glass-card card-hover">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-plum-300" />
          <h3 className="font-montserrat font-medium text-lg text-white">Categories</h3>
        </div>
        <Separator className="bg-plum-600 mb-4" />
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="flex justify-between items-center">
              <Link to={`/category/${category.name.toLowerCase()}`} className="text-plum-100 hover:text-plum-300 transition-colors">
                {category.name}
              </Link>
              <span className="text-plum-300 text-sm">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Popular Recipes */}
      <div className="bg-plum-800 rounded-xl p-5 glass-card card-hover">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-plum-300" />
          <h3 className="font-montserrat font-medium text-lg text-white">Popular Recipes</h3>
        </div>
        <Separator className="bg-plum-600 mb-4" />
        <div className="space-y-4">
          {popularRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.slug}`} key={recipe.id} className="flex items-center gap-3 group">
              <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="text-plum-100 group-hover:text-plum-300 transition-colors line-clamp-2">
                  {recipe.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Cooking Tips */}
      <div className="bg-plum-800 rounded-xl p-5 glass-card card-hover">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-plum-300" />
          <h3 className="font-montserrat font-medium text-lg text-white">Cooking Tip</h3>
        </div>
        <Separator className="bg-plum-600 mb-4" />
        <div className="text-plum-100 italic text-sm">
          "When sautéing garlic, add it last to prevent burning and maintain its flavor. Cook until just fragrant, about 30 seconds, before adding other ingredients."
        </div>
      </div>
      
      {/* Latest Updates */}
      <div className="bg-plum-800 rounded-xl p-5 glass-card card-hover">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5 text-plum-300" />
          <h3 className="font-montserrat font-medium text-lg text-white">Latest Updates</h3>
        </div>
        <Separator className="bg-plum-600 mb-4" />
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-plum-300" />
            <p className="text-plum-100 text-sm">New recipes every Tuesday & Friday</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-plum-300" />
            <p className="text-plum-100 text-sm">Seasonal collection updated monthly</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
