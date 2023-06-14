const getDb = require('../utils/database').getDb;
const mongodb = require('mongodb');

class User {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this).then(result => {
            console.log(result);
            return result;
        }).catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('users').find().toArray().then(products => {
            console.log(products);
            return products;
        }).catch(err => {
            console.log(err);
        });
    }

    static async findById(id) {
        try {
            console.log('My ProdId=',id);
            const db = getDb();
            const user = await db.collection('users').find({ _id: new mongodb.ObjectId(id) }).next();
            console.log(user);
            return user;
        } catch (err) {
            console.error(err);
            throw err; // Rethrow the error to be handled by the caller
        }
    }

    static async deleteById(id) {
        try {
            const db = getDb();
            const user = await db.collection('users').deleteOne({ _id: new mongodb.ObjectId(id) });
            console.log(user);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateById(id) {
        try {
            const db = getDb();
            const user = await db.collection('users').update({ _id: new mongodb.ObjectId(id) });
            console.log(user);
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = User;