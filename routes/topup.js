const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('topup');
});

router.post('/', (req, res) => {
    const amount = req.body.amount;
    // Implement logic to add amount to user's balance
    console.log(`Top-Up Amount: ${amount}`);
    res.redirect('/dashboard');
});

module.exports = router;
