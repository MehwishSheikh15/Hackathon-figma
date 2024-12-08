
// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// const ProductPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
// // const Product = () => {
//   // Sample product data with sale prices and cut-off prices
//   const products = [
//     {
//       id: 1,
//       name: 'Modern Chair',
//       price: '$150',
//       originalPrice: '$200',
//       image: '/images/Product1.png',
//       newTag: true,
//     },
//     {
//       id: 2,
//       name: 'Wooden Chair',
//       price: '$220',
//       originalPrice: '$300',
//       image: '/images/Product2.png',
//       newTag: false,
//     },
//     {
//       id: 3,
//       name: 'Luxury Sofa',
//       price: '$850',
//       originalPrice: '$1200',
//       image: '/images/Product3.png',
//       newTag: false,
//     },
//     {
//       id: 4,
//       name: 'Classic Chair',
//       price: '$75',
//       originalPrice: '$100',
//       image: '/images/Product4.png',
//       newTag: false,
//     },
//     {
//       id: 5,
//       name: 'Stylish Chair',
//       price: '$200',
//       originalPrice: '$300',
//       image: '/images/Product5.png',
//       newTag: false,
//     },
//     {
//       id: 6,
//       name: 'Elegant Chair',
//       price: '$130',
//       originalPrice: '$180',
//       image: '/images/Product6.png',
//       newTag: false,
//     },
//     {
//       id: 7,
//       name: 'Comfortable Armchair',
//       price: '$180',
//       originalPrice: '$250',
//       image: '/images/Product7.png',
//       newTag: false,
//     },
//     {
//       id: 8,
//       name: 'Modern Desk',
//       price: '$50',
//       originalPrice: '$75',
//       image: '/images/Product8.png',
//       newTag: false,
//     },
//   ];

//   // Categories data
//   const categories = [
//     { name: 'Wing Chair', image: '/images/category1.png', productCount: 3584 },
//     { name: 'Wooden Chair', image: '/images/category2.png', productCount: 154 },
//     { name: 'Desk Chair', image: '/images/category3.png', productCount: 154 },
//   ];

//   // State to track the active category
//   const [activeCategory, setActiveCategory] = useState<number | null>(null);

//   return (
//     <div className="py-16 px-8 bg-gray-100">
//       {/* Section Title */}
//       <h2 className="text-4xl font-extrabold text-center text-black mb-10">Featured Products</h2>

//       {/* Product Cards Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.slice(0, 4).map((product) => (
//           <div key={product.id} className="bg-gray-100 py-3 rounded-lg overflow-hidden">
//             <div className="relative">
//               {/* Product Image with "Sale" and conditionally "New" tags */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover"
//               />
//               {/* Sale Tag */}
//               <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 Sale
//               </div>
//               {/* Conditionally Render "New" Tag */}
//               {product.newTag && (
//                 <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                   New
//                 </div>
//               )}
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-black">{product.name}</h3>

//               <div className="flex items-center justify-between mt-4">
//                 {/* Product Price */}
//                 <span className="text-lg font-bold text-[#029FAE]">{product.price}</span>

//                 {/* Product Original Price (Cut-off Price) */}
//                 <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
//               </div>

//               {/* Add to Cart Button */}
//               <div className="mt-4 flex justify-between items-center">
//                 <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png"  // Cart Icon
//                     alt="Add to Cart"
//                     className="h-5 w-5 mr-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Categories Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-extrabold text-center text-black mb-8">Top Categories</h2>
//         <div className="flex space-x-8 justify-center">
//           {categories.map((category, index) => (
//             <div key={index} className="relative">
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-64 h-64 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
//                 onClick={() => setActiveCategory(index)}
//               />
//               <div className="absolute bottom-4 left-4 bg-black text-white text-xs px-2 py-1 rounded-full">
//                 {category.productCount} Products
//               </div>

//               {/* Display bar if this category is active */}
//               {activeCategory === index && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-blue-400 h-1 transition-all"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* "Our Products" Section */}
//       <h2 className="text-3xl font-extrabold text-center text-black mt-16 mb-8">Our Products</h2>

//       {/* Product Cards for Our Products */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div key={product.id} className="bg-gray-100 py-3 rounded-lg overflow-hidden">
//             <div className="relative">
//               {/* Product Image with "Sale" and conditionally "New" tags */}
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-64 object-cover"
//               />
//               {/* Sale Tag */}
//               {product.newTag && (
//                 <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                   New
//                 </div>
//               )}
//               {/* Sale Tag */}
//               <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 Sale
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-black">{product.name}</h3>

//               <div className="flex items-center justify-between mt-4">
//                 {/* Product Price */}
//                 <span className="text-lg font-bold text-[#029FAE]">{product.price}</span>

//                 {/* Product Original Price (Cut-off Price) */}
//                 <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
//               </div>

//               {/* Add to Cart Button */}
//               <div className="mt-4 flex justify-between items-center">
//                 <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full flex items-center">
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/128/2543/2543369.png"  // Cart Icon
//                     alt="Add to Cart"
//                     className="h-5 w-5 mr-2"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
// 'use client'; // If this is part of a Next.js App Directory

import React, { useState } from 'react';
import Link from 'next/link';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Modern Chair',
      price: '$150',
      originalPrice: '$200',
      image: '/images/Product1.png',
      newTag: true,
    },
    {
      id: 2,
      name: 'Wooden Chair',
      price: '$220',
      originalPrice: '$300',
      image: '/images/Product2.png',
      newTag: false,
    },
    {
      id: 3,
      name: 'Luxury Sofa',
      price: '$850',
      originalPrice: '$1200',
      image: '/images/Product3.png',
      newTag: false,
    },
    {
      id: 4,
      name: 'Classic Chair',
      price: '$75',
      originalPrice: '$100',
      image: '/images/Product4.png',
      newTag: false,
    },
    {
      id: 5,
      name: 'Stylish Chair',
      price: '$200',
      originalPrice: '$300',
      image: '/images/Product5.png',
      newTag: false,
    },
    {
      id: 6,
      name: 'Elegant Chair',
      price: '$130',
      originalPrice: '$180',
      image: '/images/Product6.png',
      newTag: false,
    },
    {
      id: 7,
      name: 'Comfortable Armchair',
      price: '$180',
      originalPrice: '$250',
      image: '/images/Product7.png',
      newTag: false,
    },
    {
      id: 8,
      name: 'Modern Desk',
      price: '$50',
      originalPrice: '$75',
      image: '/images/Product8.png',
      newTag: false,
    },
  ];

  return (
    <div className="py-16 px-8 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-black mb-10">Featured Products</h2>

      {/* Product Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 py-3 rounded-lg overflow-hidden">
            <div className="relative">
              {/* Product Image with "Sale" and conditionally "New" tags */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sale
              </div>
              {product.newTag && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  New
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">{product.name}</h3>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-[#029FAE]">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/products/${product.id}`}>
                  <button className="bg-[#029FAE] text-white py-2 px-4 rounded-full">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
