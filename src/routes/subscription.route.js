const router = require('express').Router();

router
    .post('/users/:id/subscribe', (req, res) => res.send('Subscribe'))
    .delete('/users/:id/subscribe', (req, res) => res.send('Unsubscribe'))
    .get('/users/:id/subscriptions', (req, res) => res.send('Get Subscriptions'))
    .get('/users/:id/subscribers', (req, res) => res.send('Get Subscribers'));

module.exports = router;
