import React, { useEffect, useState } from 'react';
import { useProductStore } from '../store/product';
import { useNavigate, useParams ,useLocation} from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const { name, description, price, image } = location.state || {};
  const [newProduct, setNewProduct] = useState({
    name: name || '',
    description: description || '',
    price: price || '',
    image: image || '',
    _id: id,
  });

  const { updateProduct, getProducts } = useProductStore();


  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const { success, message } = await updateProduct(newProduct);

    if (success) {
      getProducts(); // refresh list
      navigate('/');
    } else {
      alert(message || 'Failed to update');
    }

    setNewProduct({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form
      
      className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white p-8 shadow-xl rounded-2xl flex flex-col gap-6'
    >
      <h2 className='text-2xl font-bold text-center text-gray-800'>Update Product</h2>

      <input
        type='text'
        value={newProduct.name}
        placeholder='Product Name'
        className='p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />

      <input
        type='text'
        value={newProduct.description}
        placeholder='Product Description'
        className='p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />

      <input
        type='number'
        value={newProduct.price}
        placeholder='Product Price'
        className='p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />

      <input
        type='text'
        value={newProduct.image}
        placeholder='Image URL'
        className='p-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
      />

      <button
        onClick={handleUpdateProduct}
        className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300'
      >
        Submit
      </button>
    </form>
  );
};

export default Update;
