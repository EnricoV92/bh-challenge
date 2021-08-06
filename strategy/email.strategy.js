
module.exports.domain = {
    getEmails: (productName, ...productArgs) => {
        const { customerId, domain, startDate, durationMonths } = productArgs[0];
        
        let dateExp = new Date(startDate);
        dateExp.setMonth(dateExp.getMonth() + durationMonths);
        dateExp.setDate(dateExp.getDate() - 2);

        return [{
            customerId,
            productName,
            domain,
            emailDate: dateExp.toISOString().substring(0, 10)
        }]
    }
}

module.exports.hosting = {
    getEmails: (productName, ...productArgs) => {
        const { customerId, domain, startDate, durationMonths } = productArgs[0];

        let dateAct = new Date(startDate);
        dateAct.setDate( dateAct.getDate() + 1);

        let dateExp = new Date(startDate);
        dateExp.setMonth(dateExp.getMonth() + durationMonths);
        dateExp.setDate(dateExp.getDate() - 3);

        return [{
            customerId,
            productName,
            domain,
            emailDate: dateAct.toISOString().substring(0, 10)
        },
        {
            customerId,
            productName,
            domain,
            emailDate: dateExp.toISOString().substring(0, 10)
        }]
    }
}

module.exports.pdomain = {
    getEmails: (productName, ...productArgs) => {
        const { customerId, domain, startDate, durationMonths } = productArgs[0];
        
        let dateExp1 = new Date(startDate);
        dateExp1.setMonth(dateExp1.getMonth() + durationMonths);
        dateExp1.setDate(dateExp1.getDate() - 9);

        let dateExp2 = new Date(startDate);
        dateExp2.setMonth(dateExp2.getMonth() + durationMonths);
        dateExp2.setDate(dateExp2.getDate() - 2);

        return [{
            customerId,
            productName,
            domain,
            emailDate: dateExp1.toISOString().substring(0, 10)
        },
        {
            customerId,
            productName,
            domain,
            emailDate: dateExp2.toISOString().substring(0, 10)
        }]
    }
}