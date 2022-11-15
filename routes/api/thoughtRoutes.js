const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
} = require('../../controllers/thoughtController')
// /api/thoughts

    // GET all thoughts
    router.route('/').get(getThoughts).post(createThought);
    // GET a single thought by _id
    router.route('/:thoughtId').get(getSingleThought);

    // POST a new thought (** push created thought to associated user's thoughts array field) ??

    // PUT to update a thought by _id

    // DELETE a thought by _id

// /api/thoughts/:thoughtId/reactions

    // POST a reaction stored in a thoughts reaction array field

    // DELETE to pull and remove reaction by reactionId

module.exports = router;