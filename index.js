const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const productRoutes = require('./routes/productRoutes');

const mongoConnect = require('./utils/database').mongoConnect;

mongoConnect(() => {
    app.listen(3000);
});

app.use('/user', productRoutes);