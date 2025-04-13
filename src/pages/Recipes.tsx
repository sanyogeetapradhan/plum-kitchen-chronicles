
import React, { useState, useEffect } from 'react';
import RecipeCard from '@/components/recipe/RecipeCard';
import { sampleRecipes } from '@/data/recipes';
import { Badge } from '@/components/ui/badge';
import Sidebar from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Get all unique tags from recipes
const getAllTags = () => {
  const tags = new Set<string>();
  sampleRecipes.forEach(recipe => {
    recipe.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
};

const Recipes = () => {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'newest' | 'cookTime' | 'prepTime'>('newest');
  
  const allTags = getAllTags();
  
  // Filter and sort recipes
  useEffect(() => {
    let filtered = [...sampleRecipes];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Apply tag filters
    if (selectedTags.length > 0) {
      filtered = filtered.filter(recipe => 
        selectedTags.every(tag => recipe.tags?.includes(tag))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => b.id - a.id); // Sort by ID (newest first)
        break;
      case 'cookTime':
        filtered = filtered.sort((a, b) => a.cookTime - b.cookTime); // Sort by cook time (quickest first)
        break;
      case 'prepTime':
        filtered = filtered.sort((a, b) => a.prepTime - b.prepTime); // Sort by prep time (quickest first)
        break;
    }
    
    setRecipes(filtered);
  }, [searchQuery, selectedTags, sortBy]);
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  return (
    <div className="container-main py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Explore Our Recipes</h1>
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-plum-300 h-4 w-4" />
              <input
                type="text"
                placeholder="Search recipes, ingredients, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-plum-800 border border-plum-600 rounded-lg text-white placeholder:text-plum-300 focus:outline-none focus:border-plum-300"
              />
            </div>
            
            {/* Sort Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-plum-500 text-plum-200">
                  Sort by <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-plum-800 border-plum-600 text-white">
                <DropdownMenuItem onClick={() => setSortBy('newest')} className="hover:bg-plum-700 cursor-pointer">
                  Newest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('cookTime')} className="hover:bg-plum-700 cursor-pointer">
                  Quickest to Cook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('prepTime')} className="hover:bg-plum-700 cursor-pointer">
                  Quickest to Prep
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Filter Button (Mobile) */}
            <Button variant="outline" className="border-plum-500 text-plum-200 sm:hidden">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Tags Filter */}
          <div className="mb-6 hidden sm:block">
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag) 
                      ? 'bg-plum-300 hover:bg-plum-400' 
                      : 'bg-plum-700 hover:bg-plum-600'
                  }`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Recipe Count */}
          <div className="text-plum-200 mb-6">
            Found <span className="text-white font-medium">{recipes.length}</span> recipes
          </div>
          
          {/* Recipe Grid */}
          {recipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  {...recipe}
                />
              ))}
            </div>
          ) : (
            <div className="bg-plum-800 rounded-xl p-10 text-center glass-card">
              <h3 className="text-xl font-medium text-white mb-2">No recipes found</h3>
              <p className="text-plum-200">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-80 order-1 lg:order-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
