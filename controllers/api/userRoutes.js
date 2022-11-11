const { ObjectId } = require('mongoose').Types; // what is this .Types for?
const { User, Thought, Reaction } = require('../../models');
const router = require('express').Router();

// /api/users(/:userId)

    // GET all users

    // GET a single user by _id, populate thought + friend data upon this request
    // essentially when you check one persons instagram, and you see all of their posts and their friends list

    // POST a new user

    // PUT to update user by _id

    // DELETE to remove user by _id

// /api/users/:userId/friends/:friendId

    // POST to add a new friend to user's friends list

    // DELETE to remove a friend from friends list
