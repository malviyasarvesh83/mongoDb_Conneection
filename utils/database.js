const mongoose = require('mongoose');

const database = async () => {
    try {
        await mongoose.connect('mongodb+srv://malviyasarvesh83:sarvesh123@crudoperationmongoose.xrjcnhf.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while Connecting Database=', error);
    }
}

module.exports = database;