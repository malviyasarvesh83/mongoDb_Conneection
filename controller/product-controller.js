const { ObjectId } = require('mongodb');
const Product = require('../models/product');

exports.getProduct = async (req, res) => {
    try {
        const products = await Product.fetchAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.addProduct = async (req, res) => {
    try {
        console.log('My Body=',req.body);
        const { title, price, description, imageUrl } = req.body;
        const product = new Product(title, price, description, imageUrl);
        await product.save();
        res.status(201).json({ msg: 'Product Saved' });
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.getProductById = async (req, res) => {
    try {
        const _id = req.params.id;
        console.log('My Id=',_id);
        const product = await Product.findById(_id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error)
    }
}