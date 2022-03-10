const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    avatar: {
        type: String,
        trim: true,
      },
    charClass: String,
    stats: [{
        type: Number,
      }],
    charStatus: String,
    inventory: [{
      type: String,
    }],
    position: Number,      
    enemy: Boolean,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Character = model("Character", characterSchema);

module.exports = Character;
