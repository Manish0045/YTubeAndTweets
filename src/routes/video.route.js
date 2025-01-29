const router = require('express').Router();

router
    .post('/', (req, res) => res.send('Video Route'))
    .get('/', (req, res) => res.send('Video Route'))
    .get('/:id', (req, res) => res.send('Video Route'))
    .put('/:id', (req, res) => res.send('Video Route'))
    .delete('/:id', (req, res) => res.send('Video Route'))

    .post('/:id/view', (req, res) => res.send('Video Route'))
    .get('/search?query=keyword', (req, res) => res.send('Video Route'))

module.exports = router;
