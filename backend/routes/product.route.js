import express, { Router } from 'express';
import { allProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create',createProduct);
router.put('/update/:productId',updateProduct);
router.delete('/delete/:productId',deleteProduct);
router.get('/all',allProducts);


export default router;