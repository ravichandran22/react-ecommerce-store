import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, title, imageURL, description, price } = product;
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition'>
      <img src={imageURL} alt="product-img" className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{description}</p>

        <div className='flex justify-between items-center'>
          <span className="text-2xl font-bold text-blue-600">
            {price}
          </span>

          <div className='flex gap-2'>
            <Link to={`/product/${id}`} className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 text-sm">Details</Link>

            <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard