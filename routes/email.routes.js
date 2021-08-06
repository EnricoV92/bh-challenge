const { Router } = require('express');

const { getScheduledEmails } = require('../controllers/email.controller')

const router = Router();

router
    .get('/api/emails', getScheduledEmails)

module.exports = router;