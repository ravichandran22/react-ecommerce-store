import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from '../../components/TextInput';
import { useAppContext } from "../../context/CartContext";

export const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct, products } = useAppContext();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [count, setCount] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) return;

    setStatus("saving");

    const newProduct = {
      id: products.length + 1,
      title,
      category,
      description,
      price: parseFloat(price),
      image: image ? URL.createObjectURL(image) : "",
      rating: { rate: 0, count: parseInt(count) || 0 },
    };

    try {
      addProduct(newProduct);
      setStatus("success");
      setTimeout(() => navigate('/admin'), 1000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  const isDisabled = !title || !price || status === "saving";

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-6 gap-4">
        <h1 className="font-bold text-2xl text-center sm:text-left mb-0">Add Product</h1>
        <Link to='/admin'>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Back
          </button>
        </Link>
      </div>

      <div className="bg-gray-200 rounded p-4 mx-auto w-full sm:w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextInput
            id='ProductTitle'
            name='title'
            value={title}
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter the product title'
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              id='ProductCategory'
              name='category'
              value={category}
              type='text'
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Enter the category name'
            />

            <TextInput
              id='description'
              name='description'
              value={description}
              type='textarea'
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter product description'
            />

            <TextInput
              id='ProductImage'
              accept="image/*"
              type='file'
              onChange={(e) => setImage(e.target.files[0])}
            />

            <TextInput
              id='price'
              name='price'
              value={price}
              type='number'
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Enter price'
              required
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

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
            <button
              type="submit"
              disabled={isDisabled}
              className={`px-6 py-2 rounded font-bold w-full sm:w-auto text-center
                ${
                  status === "saving"
                    ? "bg-yellow-400 text-white cursor-wait"
                    : status === "success"
                    ? "bg-green-600 text-white"
                    : isDisabled
                    ? "bg-gray-400 cursor-not-allowed text-gray-200"
                    : "bg-blue-500 hover:bg-blue-700 text-white"
                }`}
            >
              {status === "saving"
                ? "Adding..."
                : status === "success"
                ? "Added!"
                : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
