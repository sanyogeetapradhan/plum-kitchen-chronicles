
import React, { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export type Ingredient = {
  id: number;
  name: string;
  amount: string;
  optional?: boolean;
};

type IngredientListProps = {
  ingredients: Ingredient[];
  servings: number;
};

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, servings }) => {
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [currentServings, setCurrentServings] = useState<number>(servings);
  
  const handleCheck = (ingredientId: number) => {
    setCheckedIngredients(prev => 
      prev.includes(ingredientId) 
        ? prev.filter(id => id !== ingredientId) 
        : [...prev, ingredientId]
    );
  };

  const adjustServings = (adjustment: number) => {
    const newServings = currentServings + adjustment;
    if (newServings >= 1) {
      setCurrentServings(newServings);
    }
  };

  const adjustAmount = (amount: string) => {
    // Simple scaling logic for quantities
    if (!amount) return '';
    
    const ratio = currentServings / servings;
    
    // Match number patterns in the amount string
    const amountMatch = amount.match(/(\d+(\.\d+)?)\s*(\D.*)?/);
    
    if (!amountMatch) return amount;
    
    const numericAmount = parseFloat(amountMatch[1]);
    const unit = amountMatch[3] || '';
    
    // Adjust the numeric amount based on the ratio
    const adjustedNumericAmount = (numericAmount * ratio).toFixed(1);
    // Remove trailing .0 if present
    const finalAdjustedAmount = adjustedNumericAmount.endsWith('.0') 
      ? adjustedNumericAmount.slice(0, -2) 
      : adjustedNumericAmount;
      
    return `${finalAdjustedAmount} ${unit}`.trim();
  };

  return (
    <div className="bg-plum-800 rounded-xl p-6 glass-card card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-montserrat font-medium text-xl text-white">Ingredients</h3>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            className="h-8 w-8 border-plum-500 text-plum-200"
            onClick={() => adjustServings(-1)}
            disabled={currentServings <= 1}
          >
            -
          </Button>
          <span className="text-white font-medium">{currentServings} servings</span>
          <Button 
            variant="outline" 
            size="icon"
            className="h-8 w-8 border-plum-500 text-plum-200"
            onClick={() => adjustServings(1)}
          >
            +
          </Button>
        </div>
      </div>
      
      <Separator className="bg-plum-600 mb-4" />
      
      <ul className="space-y-3">
        {ingredients.map((ingredient) => (
          <li 
            key={ingredient.id}
            className={`flex items-center gap-3 py-1 ${
              checkedIngredients.includes(ingredient.id) 
                ? 'opacity-50' 
                : ''
            }`}
          >
            <Checkbox 
              id={`ingredient-${ingredient.id}`} 
              checked={checkedIngredients.includes(ingredient.id)}
              onCheckedChange={() => handleCheck(ingredient.id)}
              className="border-plum-400 data-[state=checked]:bg-plum-300 data-[state=checked]:text-white"
            />
            <label 
              htmlFor={`ingredient-${ingredient.id}`}
              className={`text-plum-100 text-sm cursor-pointer flex-grow ${
                checkedIngredients.includes(ingredient.id) 
                  ? 'line-through' 
                  : ''
              }`}
            >
              <span className="font-medium">{adjustAmount(ingredient.amount)}</span> {ingredient.name}
              {ingredient.optional && (
                <span className="text-plum-400 ml-1">(optional)</span>
              )}
            </label>
          </li>
        ))}
      </ul>
      
      <Button 
        variant="outline" 
        className="w-full mt-6 border-plum-500 text-plum-300 hover:bg-plum-700"
      >
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add All to Shopping List
      </Button>
    </div>
  );
};

export default IngredientList;
