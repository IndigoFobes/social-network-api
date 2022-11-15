const router = require('express').Router();
// require all of the controller methods
const {
getUsers,
getSingleUser,
createUser,
deleteUser
} = require('../../controllers/userController');

// /api/users(/:userId)

    // GET all users  /  POST a new user
    router.route('/').get(getUsers).post(createUser);

    // GET a single user by _id, populate thought + friend data upon this request
    router.route('/:userId').get(getSingleUser).delete(deleteUser);
    // essentially when you check one persons instagram, and you see all of their posts and their friends list

    // PUT to update user by _id

    // DELETE to remove user by _id


// /api/users/:userId/friends/:friendId 

    // POST to add a new friend to user's friends list

    // DELETE to remove a friend from friends list

    module.exports = router;