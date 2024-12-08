// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="relative bg-gray-200 text-black py-20 px-10 ">
//       {/* Hero Section Container */}
//       <div className="container mx-auto flex items-center justify-between space-x-8">
        
//         {/* Left Side - Text Content */}
//         <div className="flex flex-col items-start space-y-4 max-w-xl">
//           {/* Small Text */}
//           <p className="text-sm font-light">Welcome to Chairy</p>
          
//           {/* Large Bold Heading */}
//           <h1 className="text-5xl font-extrabold">
//             Best Furniture Collection for your interior.
//           </h1>
          
//           {/* Shop Now Button */}
//           <div className="mt-6">
//             <a 
//               href="/shop" 
//               className="flex items-center bg-[#029FAE] text-white py-2 px-6 rounded-full font-semibold hover:bg-teal-600 transition"
//             >
//               Shop Now 
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="ml-2 h-5 w-5" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth="2" 
//                   d="M9 5l7 7-7 7" 
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Right Side - Product Image */}
//         <div className="flex-shrink-0">
//           <img 
//             src="/images/ProductImage.png" // Make sure to replace with correct image path
//             alt="Product"
//             className="w-[400px] h-auto rounded-lg" // Adjust size of the image
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white  px-10  shadow-lg"> {/* Parent div with rounded corners and white background */}
      <div className="relative bg-gray-200 text-black py-20 px-10 rounded-lg"> 
        {/* Hero Section Container */}
        <div className="container mx-auto flex items-center justify-between space-x-8">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col items-start space-y-4 max-w-xl">
            {/* Small Text */}
            <p className="text-sm font-light">Welcome to Chairy</p>
            
            {/* Large Bold Heading */}
            <h1 className="text-5xl font-extrabold">
              Best Furniture Collection for your interior.
            </h1>
            
            {/* Shop Now Button */}
            <div className="mt-6">
              <a 
                href="/shop" 
                className="flex items-center bg-[#029FAE] text-white py-2 px-6 rounded-full font-semibold hover:bg-teal-600 transition"
              >
                Shop Now 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="flex-shrink-0">
            <img 
              src="/images/ProductImage.png"  // Replace with the correct image path
              alt="Product"
              className="w-[400px] h-auto rounded-lg" // Rounded corners for the image
            />
          </div>
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="flex justify-center mt-8">
        <img 
          src="/images/CompanyLogo.png"  // Replace with your actual company logo path
          alt="Company Logo"
          className="h-24 rounded-full  w-auto " // Rounded logo
        />
      </div>
    </div>
  );
};

export default HeroSection;
