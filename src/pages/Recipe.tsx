
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeDetail from '@/components/recipe/RecipeDetail';
import Sidebar from '@/components/layout/Sidebar';
import { getFullRecipe } from '@/data/recipes';
import { toast } from '@/hooks/use-toast';

const Recipe = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = slug ? getFullRecipe(slug) : undefined;
  
  useEffect(() => {
    if (!recipe) {
      toast({
        title: "Recipe not found",
        description: "The recipe you're looking for doesn't exist or hasn't been created yet.",
        variant: "destructive",
      });
    }
  }, [recipe]);
  
  if (!recipe) {
    return (
      <div className="container-main py-8">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Recipe Not Found</h2>
            <p className="text-plum-100 mb-6">The recipe you're looking for doesn't exist or hasn't been created yet.</p>
            <a href="/" className="btn-primary">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container-main py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 order-2 lg:order-1">
          <RecipeDetail {...recipe} />
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-80 order-1 lg:order-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
