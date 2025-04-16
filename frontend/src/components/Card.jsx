import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import Update from '../pages/Update';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, image, price, description, id }) => {

  const navigate = useNavigate();
  const { deleteProduct } = useProductStore();


  const handleUpdateProduct = () => {
    navigate(`/update/${id}`, {
      state: {
        id,
        name,
        price,
        description,
        image
      }});
  };

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    console.log(message);
  };

  return (
    <div className="relative bg-zinc-100 h-96 w-64 text-white rounded-lg shadow-md overflow-hidden">
      <div className="flex gap-2 bg-zinc-500 justify-around items-center p-2">
        <button
          onClick={handleUpdateProduct}
          className="text-green-400 cursor-pointer font-semibold"
        >
          update
        </button>
        <button
          onClick={() => handleDeleteProduct(id)}
          className="text-red-500 cursor-pointer font-semibold"
        >
          delete
        </button>
      </div>

      {image && (
        <img className="w-20 h-48 object-cover" src={image} alt={name} />
      )}
      <div className="p-4 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-800 text-sm mb-3">{description}</p>
        <div className="flex flex-col gap-4 items-center justify-between">
          <span className="text-gray-800 font-semibold text-lg">₹{price}</span>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>

     

    </div>
  );
};

export default Card;
