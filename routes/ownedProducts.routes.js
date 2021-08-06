const { Router } = require('express');

const { addNewOwnedProduct,
    removeOwnedProduct 
} = require('../controllers/ownedProduct.controller');

const router = Router();

router
    .post('/api/customer/:customerId/products', addNewOwnedProduct)
    .delete('/api/customer/:customerId/products', removeOwnedProduct)

module.exports = router;