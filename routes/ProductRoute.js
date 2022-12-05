import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,
    getHelp,
    getHelpById,
    createHelp,
    updateHelp,
    deleteHelp
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/help', getHelp);
router.get('/help/:id', getHelpById);
router.post('/help', createHelp);
router.patch('/help/:id', updateHelp);
router.delete('/help/:id', deleteHelp);

export default router;