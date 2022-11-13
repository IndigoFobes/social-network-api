const router = require('express').Router();
const apiRoutes = require('./api');

// tell express to use our api routes
router.use('/api', apiRoutes);

// if user tries to navigate to a route that does not exist...
router.use((req, res) => res.send('Oops! Wrong route.'));

module.exports = router;