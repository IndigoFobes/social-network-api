const router = require('express').Router();
// require all of the controller methods
const {
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser
} = require('../../controllers/userController');

// /api/users(/:userId)

    // GET all users   // POST a new user
    router.route('/').get(getUsers).post(createUser);

    // GET a single user by _id, populate thought + friend data upon this request     // DELETE to remove user by _id
    router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

    // PUT to update user by _id


// /api/users/:userId/friends/:friendId 

    // POST to add a new friend to user's friends list

    // DELETE to remove a friend from friends list

    module.exports = router;