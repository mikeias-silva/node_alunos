import app from './app.js';
require('dotenv').config();

const port = process.env.PORT;
app.listen(port);
