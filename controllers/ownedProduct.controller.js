const { response } = require('express');

const addNewOwnedProduct = (req, res = response) => {

    const { customerId } = req.params;
    const { productName, domain, startDate, durationMonths } = req.body;

    /* 
        Insert into db ...
        [...]
        OwnedProductModel.insert(customerId, {
            productName,
            domain, 
            startDate, 
            durationMonths
        })
    */
    
    res.status(200).json({
        msg: `Customer: ${customerId} has a new product`,
        product: {
            productName, 
            domain, 
            startDate, 
            durationMonths
        }
    });
}

module.exports = {
    addNewOwnedProduct
}