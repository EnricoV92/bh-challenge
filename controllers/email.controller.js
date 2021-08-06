const { response } = require('express');

const emailStrategy = require('../strategy/email.strategy');

const getScheduledEmails = (req, res = response) => {

    let scheduledEmails = [];

    /* 
        Retrieve customers and each of their products 
        from the database...
        [...] 
    */

    let resultSample = [{
        customerId: 'customer2345',
        productName: 'hosting',
        domain: 'plugh.com',
        startDate: '2020-03-06',
        durationMonths: 12
    },
    {
        customerId: 'customer1234',
        productName: 'domain',
        domain: 'xyzzy.com',
        startDate: '2020-08-25',
        durationMonths: 6
    },
    {
        customerId: 'customer0011',
        productName: 'domain',
        domain: 'asdf.com',
        startDate: '2021-11-10',
        durationMonths: 15
    },
    {
        customerId: 'customer2442',
        productName: 'pdomain',
        domain: 'abcdefg.net',
        startDate: '2020-02-15',
        durationMonths: 24
    }
];

    resultSample.forEach( ({productName, ... productArgs}) => {
        let emails = emailStrategy[productName].getEmails(productName, productArgs);
        scheduledEmails.push(...emails);
    });

    scheduledEmails.sort(compareDates);

    res.status(200).json({
        scheduledEmails
    });
}

const compareDates = (a, b) => {
    let dateA = new Date (a.emailDate);
    let dateB = new Date (b.emailDate);
    
    if( dateA > dateB ) return 1;
    if( dateA < dateB ) return -1;
    return 0;
}

module.exports = {
    getScheduledEmails
}