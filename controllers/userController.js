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
            const userObject = {
                user,
                friendCount
            };
            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
            }
            return res.json(userObject);
        })
        .catch((err) => res.status(500).json(err));
    }

    // POST a new user


    // PUT to update user by _id

    // DELETE to remove user by _id

// /api/users/:userId/friends/:friendId 

    // POST to add a new friend to user's friends list

    // DELETE to remove a friend from friends list
    
}