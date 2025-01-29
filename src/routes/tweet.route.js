const router = require('express').Router();


router
    .post('/', (req, res) => res.send('Tweet Route'))
    .get('/', (req, res) => res.send('Tweet Route'))
    .get('/:id', (req, res) => res.send('Tweet Route'))
    .delete('/:id', (req, res) => res.send('Tweet Route'))

module.exports = router;