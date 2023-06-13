const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const productRoutes = require('./routes/productRoutes');

app.use("/user", productRoutes);

const mongoConnect = require('./utils/database').mongoConnect;

mongoConnect(() => {
    app.listen(3000);
});