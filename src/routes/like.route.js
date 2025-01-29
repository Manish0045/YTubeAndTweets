const router = require('express').Router();

router
    .post('/videos/:videoId/like', (req, res) => res.send("Like a video"))
    .delete('/videos/:videoId/like', (req, res) => res.send("Unlike a video"))

    .post('/comments/:commentId/like', (req, res) => res.send("Like a comment"))
    .delete('/comments/:commentId/like', (req, res) => res.send("Unlike a comment"))

    .post('/tweets/:tweetId/like', (req, res) => res.send("Like a tweet"))
    .delete('/tweets/:tweetId/like', (req, res) => res.send("Unlike a tweet"));

module.exports = router;