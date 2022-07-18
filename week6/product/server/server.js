require('./config/mongoose.config')
const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: true })); 
require('./routes/product.route')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
