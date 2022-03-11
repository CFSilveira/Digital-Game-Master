const { Schema, model } = require("mongoose");

const roomSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    roomId: {
        type: Number,
        unique: true,
      },
    gameMaster: [{
        type: Schema.Types.ObjectId,
        ref: "User",
      }],
    players: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    adventure: [{
        type: Schema.Types.ObjectId,
        ref: "Adventure",
    }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Room = model("Room", roomSchema);

module.exports = Room;
