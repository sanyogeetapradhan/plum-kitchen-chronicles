
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-plum-900 border-t border-plum-700 mt-20">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Branding */}
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-xl text-white">Plum Kitchen</h2>
            <p className="text-plum-100 text-sm">
              Discover exceptional recipes with our luxurious culinary experience.
              From gourmet meals to quick weeknight dinners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-plum-300 hover:text-plum-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-plum-300 hover:text-plum-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-plum-300 hover:text-plum-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-plum-300 hover:text-plum-200 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-medium text-lg text-white">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-plum-200 hover:text-plum-300 transition-colors">All Recipes</Link></li>
              <li><Link to="/categories" className="text-plum-200 hover:text-plum-300 transition-colors">Categories</Link></li>
              <li><Link to="/popular" className="text-plum-200 hover:text-plum-300 transition-colors">Popular Recipes</Link></li>
              <li><Link to="/seasonal" className="text-plum-200 hover:text-plum-300 transition-colors">Seasonal Dishes</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-medium text-lg text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-plum-200 hover:text-plum-300 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-plum-200 hover:text-plum-300 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-plum-200 hover:text-plum-300 transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-plum-200 hover:text-plum-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-montserrat font-medium text-lg text-white">Newsletter</h3>
            <p className="text-plum-200 text-sm">Subscribe to get latest recipes and culinary tips.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 bg-plum-800 border border-plum-600 rounded-md focus:outline-none focus:border-plum-300 text-white"
              />
              <button 
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-plum-700 mt-8 pt-6 text-center text-plum-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Plum Kitchen Chronicles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
