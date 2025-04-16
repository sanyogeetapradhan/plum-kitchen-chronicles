import { ChefHat, Heart, Flame } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f1f1f] to-[#111111] text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          Welcome to <span className="text-yellow-400 font-semibold">Plum Kitchen</span> — your daily destination for delicious, no-fuss recipes crafted by real chefs, right from their kitchens to yours. Whether you're a student, a busy professional, or just hungry and curious — we’ve got you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {/* Chefs */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <ChefHat className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Real Chefs</h3>
            <p className="text-gray-400">
              Our recipes are crafted and curated by passionate home cooks and professional chefs who believe in making food simple and soulful.
            </p>
          </div>

          {/* Love for Food */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <Heart className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-400">
              Every recipe is tried, tested, and shared with heart. We’re not just a platform — we’re a community built around joy, food, and care.
            </p>
          </div>

          {/* Easy Recipes */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6 shadow-xl border border-gray-800">
            <Flame className="text-yellow-400 w-8 h-8 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Everyday Simplicity</h3>
            <p className="text-gray-400">
              From breakfast to midnight cravings — we focus on easy-to-follow recipes with everyday ingredients. No stress. Just good food.
            </p>
          </div>
        </div>

        {/* Trusted by Millions Section */}
        <div className="mt-20 bg-[#141414] rounded-2xl px-6 py-10 shadow-inner border border-gray-800">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Trusted by Millions</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            Every day, over <span className="text-yellow-300 font-medium">2 million food lovers</span> across the globe use our platform to discover, share, and cook up easy recipes. We’ve earned their trust by being consistent, authentic, and truly useful.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">2M+</p>
              <p className="text-gray-400 mt-1">Daily users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">50K+</p>
              <p className="text-gray-400 mt-1">Recipes shared</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">98%</p>
              <p className="text-gray-400 mt-1">User satisfaction</p>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-16">
          <p className="text-gray-500 italic">
            “Fuel your day the tasty way. Simple. Real. Delicious.” 🍽️
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
