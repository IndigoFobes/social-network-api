const { ObjectId } = require('mongoose').Types; // what is this .Types for?
const { User, Thought } = require('../models');

module.exports = {
// /api/thoughts

    // GET all thoughts
    getThoughts(req, res) {
        Thought.find()
        .then(async (thoughts) => {
            return res.json(thoughts);
        })
        .catch((err) => {
           return res.status(500).json(err);
        })
    },

    // GET a single thought by _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then(async (thought) => 
        !thought
        ? res.status(404).json({ message: "No thought found with that ID!" })
        : res.status(200).json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // POST a new thought (** push created thought to associated user's thoughts array field) ??
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) =>
        User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id }},
            { new: true }
            )
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found with that ID!" })
        : res.status(200).json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // PUT to update a thought by _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: "No thought with this ID!" })
        : res.status(200).json(thought))
        .catch((err) => res.status(500).json(err));
    },

    // DELETE a thought by _id
    deleteThought(req, res) {
        Thought.findOneAndRemove(
            { _id: req.params.thoughtId },
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: "No thought with this ID!" })
        : res.status(200).json({message: "Thought deleted.", thought}))
        .catch((err) => res.status(500).json(err));
    },
// /api/thoughts/:thoughtId/reactions

    // POST a reaction stored in a thoughts reaction array field
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true}
        )
        .then((thought) => 
        !thought
        ? res.status(404).json({ message: "No thought with that ID!" })
        : res.status(200).json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // DELETE to pull and remove reaction by reactionId
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId }} },
            { runValidators: true, new: true }
        )
        .then((thought) => 
        !thought 
        ? res.status(404).json({ message: "No thought with that ID!" })
        : res.status(200).json(thought)
        )
        .catch((err) => res.status(500).json(err))
    }
}   