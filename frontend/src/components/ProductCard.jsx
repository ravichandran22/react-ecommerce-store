import { Link } from 'react-router-dom';
import { useAppContext } from '../context/CartContext';
import { toast } from "react-toastify";

function ProductCard({ product }) {

  const { id, title, image, description, price, category } = product;
  const { addToCart } = useAppContext();

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition'>
      <div className='relative'>
        <img src={image} alt="product-img" className='w-full h-48 object-contain' />
        <p className='absolute top-2 right-2 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-2 py-0.5'>{category}</p>
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2 line-clamp-1'>{title}</h3>
        <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{description}</p>

        <div className='flex justify-between items-center'>
          <span className="text-2xl font-bold text-blue-600">
            {price}
          </span>

          <div className='flex gap-2'>
            <Link to={`/product/${id}`} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 text-sm cursor-pointer">Details</Link>

            <button className='bg-purple-400 text-white px-3 py-2 rounded hover:bg-purple-700 text-sm cursor-pointer' onClick={() => {
              addToCart(product); toast.info(`${product.title} added to cart!`)
            }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard