const router = require('express').Router();
const {
    getCurrentUser,
    getAllUsers,
    signUp,
    signIn,
    signOut,
    getChannelDetails,
    getUserProfile
} = require('../controllers/user.controllers');

router
    // Auth
    .post('/auth/register', signUp)
    .post('/auth/login', signIn)
    .post('/auth/logout', signOut)

    // User
    .get('/', (req, res) => getAllUsers)
    .get('/:id', (req, res) => getUserProfile)
    .put('/:id', (req, res) => res.send('User Route'))
    .patch('/:id/avatar', (req, res) => res.send('User Route'))
    .patch('/:id/cover', (req, res) => res.send('User Route'))
    .get('/me', (req, res) => getCurrentUser)

    // Channel
    .get('/channel/:id', (req, res) => getChannelDetails)
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