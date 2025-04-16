import React, { useState } from 'react';
import { useProductStore } from '../store/product';
import { useNavigate } from 'react-router-dom';
const Create = () => {

  const navigate = useNavigate();

  const [newProduct, SetNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });

  const {createProduct} = useProductStore();


  const handleAddProduct = async(e)=>{
    e.preventDefault();
    const {success,message} = await createProduct(newProduct);
    console.log("success",success);
    console.log("message",message);
    
    SetNewProduct({name:"",description:"",price:"",image:""});
    
    if (success) {
      navigate('/'); 
    }

  }

  return (
    <form className='absolute left-64 w-[60%] h-3/5 bg-gray-500 flex items-center justify-center flex-col gap-8 rounded-lg'>

      <input
        type="text"
        value={newProduct.name}
        placeholder='Enter name of product'
        className='p-2 border border-zinc-100 w-96 rounded-2xl font-semibold'
        onChange={(e) => SetNewProduct({ ...newProduct, name: e.target.value })}
      />

      <input
        type="text"
        value={newProduct.description}
        placeholder='Enter description of product'
        className='p-2 border border-zinc-100 w-96 rounded-2xl font-semibold'
        onChange={(e) => SetNewProduct({ ...newProduct, description: e.target.value })}
      />

      <input
        type="number"
        value={newProduct.price}
        placeholder='Enter price of product'
        className='p-2 border border-zinc-100 w-96 rounded-2xl font-semibold'
        onChange={(e) => SetNewProduct({ ...newProduct, price: e.target.value })}
      />

      <input
        type="text"
        value={newProduct.image}
        placeholder='Enter image url of product'
        className='p-2 border border-zinc-100 w-96 rounded-2xl font-semibold'
        onChange={(e) => SetNewProduct({ ...newProduct, image: e.target.value })}
      />

      <button onClick={handleAddProduct} className='bg-blue-700 text-white px-9 py-1 rounded-2xl border border-none'>
        Submit
      </button>

    </form>
  );
};

export default Create;
