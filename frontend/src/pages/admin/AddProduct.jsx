import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from '../../components/TextInput';
import { useAppContext } from "../../context/CartContext";

export const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct, products } = useAppContext();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      title,
      category,
      price: parseFloat(price),
      image: image ? URL.createObjectURL(image) : "",
      rating: { rate: 0, count: parseInt(count) },
    };
    addProduct(newProduct);
    navigate('/admin');
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center container mx-auto w-3xl mb-6">
        <h1 className="font-bold text-2xl text-center mb-0">Add Product</h1>
        <Link to='/admin'><button className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-700">Back</button></Link>
      </div>
      <div className="bg-gray-200 rounded p-4 mx-auto w-3xl">

        <form onSubmit={handleSubmit} action="" className="space-y-6">
          <TextInput
            id='ProductTitle'
            name='product title'
            value={title}
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter the product title'
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              id='ProductCategory'
              name='product category'
              value={category}
              type='text'
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Enter the category name'
            />
            <TextInput
              id='ProductImage'
              accept="image/*"
              type='file'
              onChange={(e) => setImage(e.target.files[0])}
              placeholder='Upload product images'
            />
            <TextInput
              id='price'
              name='price'
              value={price}
              type='number'
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Enter price'
            />
            <TextInput
              id='count'
              name='count'
              value={count}
              type='number'
              onChange={(e) => setCount(e.target.value)}
              placeholder='Enter count'
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-700 px-6 py-2 rounded hover:text-white cursor-pointer transition"
            >
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
