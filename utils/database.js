const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://malviyasarvesh83:malviya123@mongodbcrud.wgaesi4.mongodb.net/?retryWrites=true&w=majority').then((client) => {
    console.log('Database connected Successfully');
    _db=client.db();
    callback();
}).catch((err) => {
    console.log('Error while connecting Database=', err);
    throw err;
});
}

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;