const { ObjectId } = require('mongoose').Types; // what is this .Types for?
const { User, Thought, Reaction } = require('../../models');
const router = require('express').Router();

// /api/thoughts

    // GET all thoughts

    // GET a single thought by _id

    // POST a new thought (** push created thought to associated user's thoughts array field) ??

    // PUT to update a thought by _id

    // DELETE a thought by _id

// /api/thoughts/:thoughtId/reactions

    // POST a reaction stored in a thoughts reaction array field

    // DELETE to pull and remove reaction by reactionId

module.exports = router;