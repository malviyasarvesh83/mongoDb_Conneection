const mongodb = require('mongodb');
const User = require('../models/product');

exports.getProduct = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}
exports.addProduct = async (req, res) => {
    try {
        console.log('My Body=',req.body);
        const { name, email, phone } = req.body;
        const user = await new User({
            name: name,
            email: email,
            phone: phone,
        })
        await user.save();
        res.status(201).json({ msg: 'Product Saved' });
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        user.deleteOne();
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
        const user = await User.findById(id);
        await user.updateOne({
            name: name,
            email: email,
            phone: phone,
        })
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}