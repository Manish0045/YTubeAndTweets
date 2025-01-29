const router = require('express').Router();


router
    .use('/users', require('../routes/user.route'))
    .use('/videos', require('../routes/video.route'))
    .use('/comments', require('../routes/comment.route'))
    .use('/likes', require('../routes/like.route'))
    .use('/subscriptions', require('../routes/subscription.route'))
    .use('playlists', require('../routes/playlist.route'))
    .use('/tweets', require('../routes/tweet.route'))

    // Search
    .get('/search/videos?query=keyword', (req, res) => res.send('Search videos by title or description'))
    .get('/search/users?query=keyword', (req, res) => res.send('Search users by username or name'))
    .get('/search/comments?query=keyword', (req, res) => res.send('Search comments'))

    // Admin
    .get('/admin/users', (req, res) => res.send('Get all users(admin only)'))
    .delete('/admin/users/:id', (req, res) => res.send('Delete a user(admin only)'))
    .get('/admin/videos', (req, res) => res.send('Get all videos(admin only)'))
    .delete('/admin/videos/:id', (req, res) => res.send('Delete a video(admin only)'))
    .get('/admin/comments', (req, res) => res.send('Get all comments(admin only)'))
    .delete('/admin/comments/:id', (req, res) => res.send('Delete a comment(admin only)'))
    .get('/admin/tweets', (req, res) => res.send('Get all tweets(admin only)'))
    .delete('/admin/tweets/:id', (req, res) => res.send('Delete a tweet(admin only)'))


module.exports = router;