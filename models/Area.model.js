const { Schema, model } = require("mongoose");

const areaSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
        type: String,
        trim: true,
      },
    image: {
        type: String,
        trim: true,
      },
    step: {
        type: String,
        trim: true,
        required: true,
    },
    connections: [{
      type: Schema.Types.ObjectId,
      ref: "Area",
    }],
    events: [{
        type: String,
      }],
    adventure: {
      type: Schema.Types.ObjectId,
      ref: "Adventure",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Area = model("Area", areaSchema);

module.exports = Area;
