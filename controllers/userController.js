const { ObjectId } = require('mongoose').Types; // what is this .Types for? Clarifying that ObjectId belongs to Types?
const { User, Thought, Reaction } = require('../models');

// Any aggregate functions?

module.exports = {

    // GET all users
    getUsers(req, res) {
        User.find()
        .then(async (users) => {
            return res.json(users);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },

    // GET a single user by _id, populate thought + friend data upon this request
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then(async (user) => {
            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
            }
            return res.json(user);
        })
        .catch((err) => res.status(500).json(err));
    },

    // POST a new user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    // PUT to update user by _id
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) => 
            !user
            ? res.status(404).json({ message: "No user found with that ID!" })
            : res.status(200).json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // DELETE to remove user by _id
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found with that ID!" })
        : res.status(200).json({ message: "User successfully deleted!" })
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
// /api/users/:userId/friends/:friendId 

    // POST to add a new friend to user's friends list
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !user
            ? res.status(404).json({ message: "No user found with that ID!"})
            : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }

    // DELETE to remove a friend from friends list
    
}