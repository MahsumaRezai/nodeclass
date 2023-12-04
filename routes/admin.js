const express = require('express');
const router = express.Router();
const path = require('path')

router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product'));
})
router.use('add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');

})

module.exports = router;

