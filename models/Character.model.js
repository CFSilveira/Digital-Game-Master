const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    avatar: {
        type: String,
        trim: true,
      },
    class: {
        type: String,
        trim: true,
      },
    stats: {
        type: [String],
      },
    status: String,
    inventory: {
        type: [String],
      },
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
