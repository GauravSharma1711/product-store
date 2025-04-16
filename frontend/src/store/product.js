import {create} from 'zustand'

export const useProductStore = create((set)=>({

    products:[],
    setProducts : (products)=>set({products}),

    createProduct: async(newProduct)=>{
        if(!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image){
            return {success:false, message:"Please fill all fields"}
        }
        const res = await fetch("/api/v1/products/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newProduct)
        })

        if (!res.ok) {
            const errorText = await res.text(); 
            return { success: false, message: errorText || "Something went wrong" };
          }
      


        const data = await res.json();
        set((state)=>({products:[...state.products,data.data]}))
        return {success:true, message:"Product created successfully"}
    },


    getProducts: async()=>{

        const res = await fetch("/api/v1/products/all")

        if (!res.ok) {
            const errorText = await res.text(); 
            return { success: false, message: errorText || "Something went wrong" };
          }
          const data = await res.json();
          set({products:data.data})


    },

    deleteProduct: async(id)=>{

        const res = await fetch(`/api/v1/products/delete/${id}`,{
            method:"DELETE"
        });
    
        const data = await res.json();
        if(!data.success){
            return {success:false , message:data.message};
        }
        set(state=>({products:state.products.filter(product=>product._id !==id)}))
        return {success:true , message:data.message};
    },


    updateProduct: async(newProduct)=>{
        const res = await fetch(`/api/v1/products/update/${newProduct._id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newProduct)
        })

        if (!res.ok) {
            const errorText = await res.text(); 
            return { success: false, message: errorText || "Something went wrong" };
          }
      


        const data = await res.json();
        console.log("Updated product from backend:", data.data);
        set((state) => ({
            products: state.products.map((product) =>
              product._id === newProduct._id ? data.data : product
            ),
          }));
          


        return {success:true, message:"Product updated successfully"}
    }



}))

