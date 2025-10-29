import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../../context/CartContext";
import TextInput from "../../components/TextInput";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, editProduct } = useAppContext();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    count: "",
  });

  useEffect(() => {
    const productToEdit = products.find(
      (item) => item.id === Number(id)
    );

    if (productToEdit) {
      setFormData({
        title: productToEdit.title || "",
        price: productToEdit.price || "",
        category: productToEdit.category || "",
        description: productToEdit.description || "",
        count: productToEdit.rating?.count || "",
      });
    }
  }, [id, products]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: Number(id),
      title: formData.title,
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description,
      rating: { rate: 0, count: parseInt(formData.count) },
    };

    editProduct(updatedProduct);
    navigate("/admin");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Edit Product
        </h2>
        <Link to='/admin'><button className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer hover:bg-blue-700">Back</button></Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block text-gray-700 font-semibold mb-2">Product Title:</label>
        <TextInput
          label="Product Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label className="block text-gray-700 font-semibold mb-2">Price:</label>
        <TextInput
          label="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label className="block text-gray-700 font-semibold mb-2">Category:</label>
        <TextInput
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        {/* <TextInput
          label="Description"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
        /> */}

        <label className="block text-gray-700 font-semibold mb-2">Count:</label>
        <TextInput
          label="Count"
          name="count"
          type="number"
          value={formData.count}
          onChange={handleChange}
        />

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500 font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-semibold"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
