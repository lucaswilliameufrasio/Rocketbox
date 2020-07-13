const mongoose = require("mongoose");

const Box = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  },
  {
    timestamps: true,
  }
);

Box.index({ createdAt: 1 }, { expires: 1800 });

module.exports = mongoose.model("Box", Box);
