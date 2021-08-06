const { Router } = require('express');
const { addNewOwnedProduct 
} = require('../controllers/ownedProduct.controller');

const router = Router();

router
    .post('/api/customer/:customerId/products', addNewOwnedProduct)
    .delete('/api/customer/:customerId/products')

module.exports = router;