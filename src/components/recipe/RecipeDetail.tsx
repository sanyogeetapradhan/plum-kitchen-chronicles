
import React, { useState } from 'react';
import { Clock, ChefHat, Utensils, AlarmClock, BarChart2, Printer, Bookmark, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IngredientList, { Ingredient } from './IngredientList';
import InstructionSteps, { Instruction } from './InstructionSteps';
import CookMode from './CookMode';

export type NutritionInfo = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
};

export type RecipeDetailProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition: NutritionInfo;
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  title,
  image,
  description,
  prepTime,
  cookTime,
  servings,
  difficulty,
  tags,
  ingredients,
  instructions,
  nutrition,
}) => {
  const [isCookMode, setIsCookMode] = useState(false);
  const [showCookModeFullscreen, setShowCookModeFullscreen] = useState(false);
  
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Hard':
        return 'bg-red-500';
      default:
        return 'bg-plum-300';
    }
  };

  const totalTime = prepTime + cookTime;
  
  return (
    <div className="w-full">
      {/* Cook Mode Fullscreen */}
      {showCookModeFullscreen && (
        <CookMode
          instructions={instructions}
          ingredients={ingredients}
          title={title}
          onClose={() => setShowCookModeFullscreen(false)}
        />
      )}
      
      {/* Hero Header */}
      <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden mb-8">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-900/90 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <Badge key={tag} className="bg-plum-300 hover:bg-plum-400 text-white">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-2">
              {title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Recipe Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-plum-300" />
            <div>
              <div className="text-white font-medium">{totalTime} mins</div>
              <div className="text-xs text-plum-300">Total Time</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <AlarmClock className="h-5 w-5 mr-2 text-plum-300" />
            <div>
              <div className="text-white font-medium">{prepTime} mins</div>
              <div className="text-xs text-plum-300">Prep Time</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Utensils className="h-5 w-5 mr-2 text-plum-300" />
            <div>
              <div className="text-white font-medium">{cookTime} mins</div>
              <div className="text-xs text-plum-300">Cook Time</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <ChefHat className="h-5 w-5 mr-2 text-plum-300" />
            <div>
              <div className="text-white font-medium">{difficulty}</div>
              <div className="text-xs text-plum-300">Difficulty</div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-plum-500 text-plum-300">
            <Printer className="h-4 w-4 mr-1" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="border-plum-500 text-plum-300">
            <Bookmark className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button variant="outline" size="sm" className="border-plum-500 text-plum-300">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
      
      {/* Description */}
      <div className="bg-plum-800 rounded-xl p-6 glass-card card-hover mb-8">
        <p className="text-plum-100 leading-relaxed">{description}</p>
      </div>
      
      {/* Cook Mode Button */}
      <Button 
        className="w-full bg-plum-300 hover:bg-plum-400 text-white mb-6"
        onClick={() => setShowCookModeFullscreen(true)}
      >
        Enter Cook Mode
      </Button>
      
      {/* Toggle Cook Mode (Mobile Only) */}
      <div className="lg:hidden mb-6">
        <Button 
          className="w-full bg-plum-700 hover:bg-plum-600 text-white"
          onClick={() => setIsCookMode(!isCookMode)}
        >
          {isCookMode ? "View Ingredients" : "View Instructions"}
        </Button>
      </div>
      
      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* On mobile, conditionally show ingredients or instructions based on cook mode */}
        <div className={`lg:block ${isCookMode ? 'hidden' : 'block'} lg:col-span-1`}>
          <IngredientList ingredients={ingredients} servings={servings} />
        </div>
        
        <div className={`lg:block ${isCookMode ? 'block' : 'hidden'} lg:col-span-2`}>
          <InstructionSteps instructions={instructions} />
        </div>
      </div>
      
      {/* Nutrition Information */}
      <div className="mt-8">
        <Tabs defaultValue="nutrition">
          <TabsList className="w-full bg-plum-700">
            <TabsTrigger value="nutrition" className="flex-1">Nutrition Facts</TabsTrigger>
            <TabsTrigger value="notes" className="flex-1">Chef's Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="nutrition" className="bg-plum-800 rounded-b-xl p-6 glass-card">
            <div className="flex items-center gap-2 mb-4">
              <BarChart2 className="h-5 w-5 text-plum-300" />
              <h3 className="font-montserrat font-medium text-xl text-white">Nutrition Information</h3>
            </div>
            <Separator className="bg-plum-600 mb-4" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.calories}</div>
                <div className="text-plum-300 text-sm">Calories</div>
              </div>
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.protein}g</div>
                <div className="text-plum-300 text-sm">Protein</div>
              </div>
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.carbs}g</div>
                <div className="text-plum-300 text-sm">Carbs</div>
              </div>
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.fat}g</div>
                <div className="text-plum-300 text-sm">Fat</div>
              </div>
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.fiber}g</div>
                <div className="text-plum-300 text-sm">Fiber</div>
              </div>
              <div className="bg-plum-700 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-white">{nutrition.sugar}g</div>
                <div className="text-plum-300 text-sm">Sugar</div>
              </div>
            </div>
            
            <p className="text-plum-300 text-sm mt-4">* Percent Daily Values are based on a 2,000 calorie diet.</p>
          </TabsContent>
          
          <TabsContent value="notes" className="bg-plum-800 rounded-b-xl p-6 glass-card">
            <h3 className="font-montserrat font-medium text-xl text-white mb-4">Chef's Notes</h3>
            <Separator className="bg-plum-600 mb-4" />
            <p className="text-plum-100">
              This recipe can be customized in many ways. Try using different herbs or spices to suit your taste preferences. 
              For a richer flavor, you can substitute vegetable broth with chicken or beef broth.
              Leftovers can be stored in an airtight container in the refrigerator for up to 3 days.
            </p>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Comments Section Placeholder */}
      <div className="mt-8 bg-plum-800 rounded-xl p-6 glass-card card-hover">
        <h3 className="font-montserrat font-medium text-xl text-white mb-4">Comments</h3>
        <Separator className="bg-plum-600 mb-4" />
        
        <div className="text-center py-8">
          <p className="text-plum-200 mb-4">Be the first to leave a comment on this recipe!</p>
          <Button className="bg-plum-300 hover:bg-plum-400 text-white">Add a Comment</Button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
