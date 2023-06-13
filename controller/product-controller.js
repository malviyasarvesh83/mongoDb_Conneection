const Product = require('../models/product');

exports.getProduct=async(req,res)=>{}
exports.addProduct = async (req, res) => {
    try {
        console.log('My Body=', req);
        const { title, price, description, imageUrl } = req.body;
        const product = new Product(title, price, description, imageUrl);
        await product.save();
        res.status(201).json({ msg: 'Product Saved' });
    } catch (error) {
        res.status(400).json(error);
    }
}