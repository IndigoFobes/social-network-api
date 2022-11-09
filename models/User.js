const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// virtual to find how many friends a user has
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create model based on schema
const User = model('User', userSchema);

module.export = User;
