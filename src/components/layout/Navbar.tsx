
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-plum-900/95 backdrop-blur-md border-b border-plum-700">
      <div className="container-main py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-plum-300" />
            <span className="font-montserrat font-bold text-xl md:text-2xl text-white">Plum Kitchen</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="link-hover font-medium">Home</Link>
            <Link to="/recipes" className="link-hover font-medium">Recipes</Link>
            <Link to="/categories" className="link-hover font-medium">Categories</Link>
            <Link to="/about" className="link-hover font-medium">About</Link>
            <Link to="/contact" className="link-hover font-medium">Contact</Link>
          </nav>
          
          {/* Search and Profile - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-10 bg-plum-800 border-plum-600 focus:border-plum-300 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-plum-200 hover:text-plum-100 hover:bg-plum-700">
              <User className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-plum-200 hover:text-plum-100 hover:bg-plum-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="pl-10 bg-plum-800 border-plum-600 focus:border-plum-300 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="link-hover font-medium py-2">Home</Link>
              <Link to="/recipes" className="link-hover font-medium py-2">Recipes</Link>
              <Link to="/categories" className="link-hover font-medium py-2">Categories</Link>
              <Link to="/about" className="link-hover font-medium py-2">About</Link>
              <Link to="/contact" className="link-hover font-medium py-2">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
