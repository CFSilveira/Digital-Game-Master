const { Schema, model } = require("mongoose");

const adventureSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    image: {
        type: String,
        trim: true,
      },
    description: {
        type: String,
        trim: true,
      },
    steps: Number,
    areas: [{
      type: Schema.Types.ObjectId,
      ref: "Area",
    }],
    encounters: {
        type: [String],
      },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Adventure = model("Adventure", adventureSchema);

module.exports = Adventure;
