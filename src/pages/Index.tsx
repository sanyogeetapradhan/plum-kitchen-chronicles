
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';
import RecipeCard from '@/components/recipe/RecipeCard';
import { sampleRecipes } from '@/data/recipes';

const Index = () => {
  const navigate = useNavigate();
  const featuredRecipe = sampleRecipes[0];
  const otherRecipes = sampleRecipes.slice(1);
  
  return (
    <div className="container-main py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=2076&auto=format&fit=crop" 
              alt="Hero background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-plum-900/90 to-transparent" />
          </div>
          
          <div className="relative py-16 px-6 md:py-24 md:px-12 max-w-2xl">
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl text-white mb-4">
              Elevate Your Culinary Experience
            </h1>
            <p className="text-plum-100 text-lg md:text-xl mb-8">
              Discover exquisite recipes with our collection of gourmet meals, desserts, and culinary inspirations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-plum-300 hover:bg-plum-400 text-white px-6 py-2 text-lg"
                onClick={() => navigate('/recipes')}
              >
                <ChefHat className="mr-2 h-5 w-5" />
                Explore Recipes
              </Button>
              <Button 
                variant="outline" 
                className="border-plum-300 text-plum-100 hover:bg-plum-800/50 px-6 py-2 text-lg"
              >
                Latest Collections
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipe */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white">Featured Recipe</h2>
          <Button 
            variant="link" 
            className="text-plum-300 hover:text-plum-200"
            onClick={() => navigate('/recipes')}
          >
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 md:h-auto rounded-xl overflow-hidden">
            <img 
              src={featuredRecipe.image}
              alt={featuredRecipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-white mb-2">
                {featuredRecipe.title}
              </h3>
              <p className="text-plum-100">
                {featuredRecipe.summary}
                <br /><br />
                Our featured recipe this week highlights seasonal ingredients and bold flavors. Perfect for a special dinner or when you want to impress your guests with minimal effort.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-plum-800 rounded-lg p-3 text-center w-24">
                <div className="text-lg font-medium text-white">{featuredRecipe.prepTime + featuredRecipe.cookTime} min</div>
                <div className="text-plum-300 text-xs">Total Time</div>
              </div>
              <div className="bg-plum-800 rounded-lg p-3 text-center w-24">
                <div className="text-lg font-medium text-white">{featuredRecipe.difficulty}</div>
                <div className="text-plum-300 text-xs">Difficulty</div>
              </div>
              <div className="bg-plum-800 rounded-lg p-3 text-center w-24">
                <div className="text-lg font-medium text-white">4</div>
                <div className="text-plum-300 text-xs">Servings</div>
              </div>
            </div>
            
            <Button 
              className="bg-plum-300 hover:bg-plum-400 text-white w-full md:w-auto md:self-start"
              onClick={() => navigate(`/recipe/${featuredRecipe.slug}`)}
            >
              View Recipe
            </Button>
          </div>
        </div>
      </section>
      
      {/* Recent Recipes */}
      <section>
        <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-6">Recent Recipes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="border-plum-300 text-plum-300 hover:bg-plum-800/50 px-8"
            onClick={() => navigate('/recipes')}
          >
            Load More Recipes
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
