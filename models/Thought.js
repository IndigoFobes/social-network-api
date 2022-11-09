const { Schema, model } = require('mongoose');

// Schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            
        },
        username: {

        },
        reactions: [

        ],
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