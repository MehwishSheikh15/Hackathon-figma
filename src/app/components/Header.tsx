
import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-950 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 text-white">
          <div className="icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path>
            </svg>
          </div>
          <span className="text-sm font-poppins font-normal text-[14px]">
            Free shipping on all orders over $50
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-white">
          {/* English Dropdown */}
          <div className="flex items-center space-x-1">
            <span className="text-sm">English</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* FAQs */}
          <div className="text-sm">FAQs</div>

          {/* Need Help */}
          <div className="flex items-center space-x-1">
          <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg> 
            <span className="text-sm">Need Help</span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

