import React,{useEffect} from 'react'
import { useProductStore } from '../store/product'

import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';


const HomePage = () => {

  const navigate = useNavigate();

const { getProducts,products } = useProductStore()
  useEffect(() => {
    getProducts()
  }, [getProducts])
  console.log("products",products);
  


  return (
    <div
     className=' absolute w-full h-[70%] text-white flex items-center flex-wrap gap-12 ' 
     >
 
 {
  products.length!==0?   
  
    products.map((product) => (
      <Card
      key={product._id} 
      id={product._id}  
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
      />
    ))
  
  
 :
 
 <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-700 font-bold px-5 py-4 rounded-xl'>
 No product found
</h1>

   
 }



    </div>
  )
}

export default HomePage