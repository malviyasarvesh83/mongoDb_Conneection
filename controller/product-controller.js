const { ObjectId } = require('mongodb');
const User = require('../models/product');

exports.getProduct = async (req, res) => {
    try {
        const users = await User.fetchAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.addProduct = async (req, res) => {
    try {
        console.log('My Body=',req.body);
        const { name, email, phone } = req.body;
        const id = Math.floor(Math.random() * 90 + 10);
        const user = new User(id, name, email,phone);
        await user.save();
        res.status(201).json({ msg: 'Product Saved' });
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log('My Id=',id);
        const user = await User.deleteById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.editProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, phone } = req.body;
        console.log('My Update Id=', id);
        const user = await User.updateById(id);
        
    } catch (error) {
        res.status(400).json(error);
    }
}