const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // ***TODO: getter method to format date!
        },
        username: {
            type: String,
            required: true // ** Do I have to do anything HERE to reference the user model?
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// virtual to find how many reactions are left ona given thought
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// Create model based on schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;