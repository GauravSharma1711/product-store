import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async(req,res)=>{

    const {name,price,image,description}  = req.body;

    if(!name||!image||!price||!description){
        return res.status(400).json({success:false,message:"all fields are required"});
    }

    try {
        const product = await Product.create({
            name,
            description,
            price,
            image
        })
     await  product.save();


      return res.status(200).json({success:true,message:"Product created Successfully",product});
    } catch (error) {
        return res.status(500).json({success:false,message:"internal server error"});
    }



}

export const updateProduct = async(req,res)=>{

    const productId = req.params.productId;

    const {name,price,image,description} = req.body;

   try {
     const existingProduct = await Product.findById(productId);
 
     if(!existingProduct){
         return res.status(404).json("product not found")
     }
  
     existingProduct.name = name || existingProduct.name;
    existingProduct.description = description || existingProduct.description;
    existingProduct.price = price || existingProduct.price;
    existingProduct.image = image || existingProduct.image;

     await existingProduct.save();

     return res.status(200).json("product updated successfully",existingProduct);
 
   } catch (error) {
    return res.status(500).json("Internal server error");
   }

    
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.productId;

    if(!mongoose.Types.ObjectId.isValid(productId)){
      return res.status(404).json({success:false,message:"invalid product id"});
    }
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
  
      if (deletedProduct) {
        console.log("Deleted product:", deletedProduct);
        return res.status(200).json({
          success: true,
          message: "Product deleted successfully",
          product: deletedProduct
        });
      } else {
        console.log("Product not found by that ID");
        return res.status(404).json({
          success: false,
          message: "Product not found"
        });
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  };
  

export const allProducts = async(req,res)=>{
    
    try {
        const allProduct = await Product.find();

        if (allProduct.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No products found"
          });
        }
    

        return res.status(200).json({message:"all products found",data:allProduct});
    } catch (error) {
        return res.status(500).json("Internal server error");
        
    }



}