import React from 'react';

const Logo = () => {
  return (
    <div className="bg-gray-100 shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Comforty */}
        <div className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-8 w-8 mr-2" 
          />
          <span className="text-black text-lg font-bold">Comforty</span>
        </div>

        {/* Button with Cart Section */}
        <button className="flex items-center bg-white text-black font-medium rounded-full px-4 py-2 shadow-md hover:bg-gray-100">
          {/* Cart Icon */}
          <img 
            src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png" 
            className="h-6 w-6 mr-3" 
            loading="lazy" 
            alt="Shopping cart" 
            title="Shopping cart" 
          />
          {/* Cart Count and Text */}
          <div className="flex items-center space-x-2">
            <span className="bg-green-500 text-black rounded-full px-2 py-1 text-sm">2</span>
            <span className="text-sm">Cart</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Logo;
