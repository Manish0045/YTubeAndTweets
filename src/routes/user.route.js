const router = require('express').Router();

router
    // Auth
    .post('/auth/register', (req, res) => res.send('User Route'))
    .post('/auth/login', (req, res) => res.send('User Route'))
    .post('/auth/logout', (req, res) => res.send('User Route'))

    // User
    .get('/', (req, res) => res.send('User Route'))
    .get('/:id', (req, res) => res.send('User Route'))
    .put('/:id', (req, res) => res.send('User Route'))
    .patch('/:id/avatar', (req, res) => res.send('User Route'))
    .patch('/:id/cover', (req, res) => res.send('User Route'))
    .get('/me', (req, res) => res.send('User Route'))

    // Channel
    .get('/channel/:id', (req, res) => res.send('User Route'))
    .get('/channel/:id/videos', (req, res) => res.send('User Route'))
    .get('/channel/:id/playlists', (req, res) => res.send('User Route'))

    // History
    .get('/:id/watch-history', (req, res) => res.send('User Route'))
    .post('/:id/watch-history', (req, res) => res.send('User Route'))
    .delete('/:id/watch-history', (req, res) => res.send('User Route'))

    // Liked Videos
    .get('/:id/liked-videos', (req, res) => res.send('User Route'))
    .post('/:id/liked-videos', (req, res) => res.send('User Route'))
    .delete('/:id/liked-videos', (req, res) => res.send('User Route'))

module.exports = router;