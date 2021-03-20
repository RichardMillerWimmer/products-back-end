require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();
const controller = require('./products_controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get('/api/products', controller.getAll);
app.get('/api/products/:id', controller.getOne);
app.put('/api/products/:id', controller.create);
app.post('/api/products', controller.update);
app.delete('/api/products/:id', controller.delete);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => {
        console.log(` Database connected and server listening on port ${SERVER_PORT}`)
    });

}).catch(error => console.log(error));





// app.listen(SERVER_PORT, () => {
//     console.log(`Server listening on port ${SERVER_PORT}`)
// });
