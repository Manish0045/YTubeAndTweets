const router = require('express').Router();

router
    .post('/videos/:videoId/comment', (req, res) => res.send("Add comment to a video"))
    .get('/videos/:videoId/comments', (req, res) => res.send("Get all comments for a video"))
    .get('/:id', (req, res) => res.send("Get a specific comment"))
    .put('/:id', (req, res) => res.send("Update a comment"))
    .delete('/:id', (req, res) => res.send("Delete a comment"))

    .post('/:id/like', (req, res) => res.send("Like a comment"))
    .delete('/:id/like', (req, res) => res.send("Unlike a comment"));

module.exports = router;