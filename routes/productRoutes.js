const express = require('express');
const router = express.Router();
const productController = require('../controller/product-controller');

router.get('/getProduct', productController.getProduct);
router.post('/addProduct', productController.addProduct);
router.get('/getProduct/:id', productController.getProductById);

module.exports = router;