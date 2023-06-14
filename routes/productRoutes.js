const express = require('express');
const router = express.Router();
const productController = require('../controller/product-controller');

router.get('/getProduct', productController.getProduct);
router.post('/addProduct', productController.addProduct);
router.delete('/getProductById/:id', productController.deleteProduct);
router.get('/editProduct/:id', productController.editProduct);
router.post('/updateProduct/:id', productController.updateProduct);

module.exports = router;