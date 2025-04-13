
import { Ingredient } from "@/components/recipe/IngredientList";
import { Instruction } from "@/components/recipe/InstructionSteps";
import { NutritionInfo, RecipeDetailProps } from "@/components/recipe/RecipeDetail";
import { RecipeCardProps } from "@/components/recipe/RecipeCard";

export const sampleRecipes: RecipeCardProps[] = [
  {
    id: 1,
    title: "Creamy Mushroom Risotto",
    slug: "creamy-mushroom-risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
    prepTime: 15,
    cookTime: 30,
    difficulty: "Medium",
    summary: "Rich and creamy Italian risotto with sautéed mushrooms, white wine, and Parmesan cheese.",
    tags: ["Vegetarian", "Dinner", "Italian"]
  },
  {
    id: 2,
    title: "Lemon Garlic Roasted Chicken",
    slug: "lemon-garlic-roasted-chicken",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=2070&auto=format&fit=crop",
    prepTime: 20,
    cookTime: 60,
    difficulty: "Easy",
    summary: "Tender roasted chicken with bright lemon, garlic, and herbs for a classic dinner.",
    tags: ["Dinner", "High-Protein", "Gluten-Free"]
  },
  {
    id: 3,
    title: "Chocolate Raspberry Tart",
    slug: "chocolate-raspberry-tart",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=2066&auto=format&fit=crop",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Hard",
    summary: "Decadent dark chocolate tart with fresh raspberries and a buttery crust.",
    tags: ["Dessert", "Chocolate", "Baking"]
  },
  {
    id: 4,
    title: "Thai Coconut Curry Soup",
    slug: "thai-coconut-curry-soup",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=2070&auto=format&fit=crop",
    prepTime: 15,
    cookTime: 20,
    difficulty: "Easy",
    summary: "Aromatic Thai soup with coconut milk, vegetables, and authentic spices.",
    tags: ["Soup", "Thai", "Vegan"]
  },
  {
    id: 5,
    title: "Avocado & Quinoa Buddha Bowl",
    slug: "avocado-quinoa-buddha-bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
    prepTime: 20,
    cookTime: 15,
    difficulty: "Easy",
    summary: "Nutritious bowl with quinoa, roasted vegetables, avocado, and tahini dressing.",
    tags: ["Vegetarian", "Healthy", "Lunch"]
  },
  {
    id: 6,
    title: "Classic Beef Bourguignon",
    slug: "classic-beef-bourguignon",
    image: "https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2272&auto=format&fit=crop",
    prepTime: 30,
    cookTime: 180,
    difficulty: "Medium",
    summary: "Traditional French beef stew slow-cooked with red wine, bacon, and vegetables.",
    tags: ["Dinner", "French", "Slow-Cook"]
  }
];

export const mushroomRisottoIngredients: Ingredient[] = [
  { id: 1, name: "arborio rice", amount: "1 cup" },
  { id: 2, name: "mixed mushrooms (cremini, shiitake, or portobello), sliced", amount: "8 oz" },
  { id: 3, name: "shallots, finely diced", amount: "2" },
  { id: 4, name: "garlic cloves, minced", amount: "3" },
  { id: 5, name: "dry white wine", amount: "1/2 cup" },
  { id: 6, name: "vegetable broth, warm", amount: "4 cups" },
  { id: 7, name: "Parmesan cheese, grated", amount: "1/2 cup" },
  { id: 8, name: "butter", amount: "3 tbsp" },
  { id: 9, name: "olive oil", amount: "2 tbsp" },
  { id: 10, name: "fresh thyme leaves", amount: "1 tbsp" },
  { id: 11, name: "salt and freshly ground black pepper", amount: "to taste" },
  { id: 12, name: "fresh parsley, chopped", amount: "2 tbsp", optional: true },
];

export const mushroomRisottoInstructions: Instruction[] = [
  {
    id: 1,
    step: 1,
    content: "In a large pan, heat 1 tablespoon of olive oil over medium heat. Add the sliced mushrooms and cook until golden brown and all moisture has evaporated, about 5-7 minutes. Transfer to a plate and set aside.",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    step: 2,
    content: "In the same pan, heat the remaining olive oil and 1 tablespoon of butter. Add shallots and sauté until translucent, about 2-3 minutes.",
    tip: "Shallots should be soft but not browned to preserve their delicate flavor."
  },
  {
    id: 3,
    step: 3,
    content: "Add garlic and thyme, and cook for another minute until fragrant."
  },
  {
    id: 4,
    step: 4,
    content: "Add the arborio rice and stir for 1-2 minutes until the grains are coated with oil and slightly translucent around the edges.",
    tip: "This toasting step is crucial for developing the risotto's texture and nutty flavor."
  },
  {
    id: 5,
    step: 5,
    content: "Pour in the white wine and stir until it's completely absorbed."
  },
  {
    id: 6,
    step: 6,
    content: "Begin adding the warm vegetable broth, one ladle (about 1/2 cup) at a time, stirring constantly. Wait until each addition is almost completely absorbed before adding more.",
    timer: 20,
    tip: "The slow addition of broth and constant stirring releases the rice's starch, creating the creamy texture risotto is known for."
  },
  {
    id: 7,
    step: 7,
    content: "Continue this process until the rice is al dente (tender but still with a slight bite), which should take about 18-22 minutes. You may not need all the broth."
  },
  {
    id: 8,
    step: 8,
    content: "Stir in the sautéed mushrooms, remaining butter, and grated Parmesan cheese. Season with salt and pepper to taste.",
    image: "https://images.unsplash.com/photo-1652622550490-dea436e28161?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: 9,
    step: 9,
    content: "Remove from heat and let rest for 2 minutes. Garnish with chopped parsley if desired, and serve immediately.",
    tip: "Risotto is best enjoyed fresh while it maintains its creamy consistency."
  }
];

export const mushroomRisottoNutrition: NutritionInfo = {
  calories: 380,
  protein: 9,
  carbs: 48,
  fat: 15,
  fiber: 3,
  sugar: 2
};

export const getFullRecipe = (slug: string): RecipeDetailProps | undefined => {
  const recipe = sampleRecipes.find(r => r.slug === slug);
  if (!recipe) return undefined;
  
  // For this example, we're only providing full details for the mushroom risotto
  if (slug === "creamy-mushroom-risotto") {
    return {
      ...recipe,
      description: "This creamy mushroom risotto is a classic Italian comfort food that's perfect for a cozy dinner. The slow cooking process and gradual addition of broth creates a creamy, luxurious texture without the need for heavy cream. The earthy mushrooms are complemented by the richness of Parmesan cheese and a hint of white wine, making this dish both sophisticated and satisfying.",
      servings: 4,
      ingredients: mushroomRisottoIngredients,
      instructions: mushroomRisottoInstructions,
      nutrition: mushroomRisottoNutrition
    };
  }
  
  // Return a basic version for other recipes
  return {
    ...recipe,
    description: "Detailed recipe coming soon! Check back later for the full instructions and ingredients list.",
    servings: 4,
    ingredients: [{ id: 1, name: "Sample ingredient", amount: "1 cup" }],
    instructions: [{ id: 1, step: 1, content: "Sample instruction step." }],
    nutrition: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sugar: 0
    }
  };
};
