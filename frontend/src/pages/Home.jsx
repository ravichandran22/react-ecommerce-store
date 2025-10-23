import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/CartContext';

function Home() {

  const {products, loading} = useAppContext();

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-gray-500 text-lg animate-pulse'>Loading Products....</p>
      </div>
    )
  }

  if (!products || products.length === 0) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-gray-500 text-lg'>OOPs No products found!</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Our Products</h1>
      <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home