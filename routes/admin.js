const express = require('express');
const router = express.Router();

router.use('/add', (req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text"><button type="submit">sned</button></form>');
})
router.use('product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');

})

module.exports = router;

