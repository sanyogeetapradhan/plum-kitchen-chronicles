
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export type RecipeCardProps = {
  id: number;
  title: string;
  slug: string;
  image: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  summary: string;
  tags?: string[];
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  slug,
  image,
  prepTime,
  cookTime,
  difficulty,
  summary,
  tags,
}) => {
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

  return (
    <Link to={`/recipe/${slug}`}>
      <div className="bg-plum-800 rounded-xl overflow-hidden card-hover h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge className={`${getDifficultyColor()} text-white`}>
              {difficulty}
            </Badge>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-montserrat font-medium text-lg text-white mb-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center text-sm text-plum-200">
              <Clock className="h-4 w-4 mr-1 text-plum-300" />
              <span>{prepTime + cookTime} min</span>
            </div>
            <div className="flex items-center text-sm text-plum-200">
              <ChefHat className="h-4 w-4 mr-1 text-plum-300" />
              <span>{difficulty}</span>
            </div>
          </div>
          
          <p className="text-plum-100 text-sm line-clamp-2 flex-grow">{summary}</p>
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-plum-700 text-plum-200 hover:bg-plum-600">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="secondary" className="bg-plum-700 text-plum-200">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
