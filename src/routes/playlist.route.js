const router = require('express').Router();

router
    .post('/', (req, res) => res.send('Create a new playlist'))
    .get('/', (req, res) => res.send('Get all  of the logged-in user'))
    .get('/:id', (req, res) => res.send('Get a specific playlist\'s details'))

    .put('/:id', (req, res) => res.send('Update a playlist(e.g., name, description)'))
    .delete('/:id', (req, res) => res.send('Delete a playlist'))

    .post('/:id/videos', (req, res) => res.send('Add a video to a playlist'))
    .delete('/:id/videos/:videoId', (req, res) => res.send('Remove a video from a playlist'));

module.exports = router;
