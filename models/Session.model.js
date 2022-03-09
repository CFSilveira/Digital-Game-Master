const { Schema, model } = require("mongoose");

const sessionSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    sessionId: {
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

const Session = model("Session", sessionSchema);

module.exports = Session;
