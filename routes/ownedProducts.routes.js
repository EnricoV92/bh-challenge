const { Router } = require('express');

const router = Router();

router
    .post('/api/customer/:customerId/products')
    .delete('/api/customer/:customerId/products')

module.exports = router;