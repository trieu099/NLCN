const express = require('express');
const cors = require('cors');
const ApiError = require('./api-error');

const app = express();

app.use(cors());
app.use(express.json());

const libraryController = require('./controllers/Library.controller');
const customerController = require('./controllers/Customer.controller');

app.get('/',(req,res) => {
    res.json({message: 'Nguyen Duc Trieu!'});
});

//customer
app.route('/api/customer')
    .post(customerController.create)
    .get(customerController.findAll)

app.route('/api/customer/:listId')
    .get(customerController.findOne)
    .put(customerController.update)
    .delete(customerController.delete);
// app.route('/api/customerbor')
//     .get(customerController.findAllBorrow);

    //library    
app.route('/api/books')
    .get(libraryController.findAll)
    .post(libraryController.create)
    .delete(libraryController.delete);

app.route('/api/books/:bookCode')
    .get(libraryController.findOne)
    .put(libraryController.update)
    .delete(libraryController.delete);
// Handle 404 response.
app.use((req, res, next) => {
    return next(new ApiError(404, 'Resource not found'));
    });
app.use((error, req, res, next) => {
    return res.status(error.statusCode || 500).json({
    message: error.message || 'Internal Server Error',
    });
    });
module.exports = app;