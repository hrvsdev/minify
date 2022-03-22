const { default: mongoose } = require("mongoose");
const { nanoid } = require("nanoid");
const urlSchema = new mongoose.Schema(
  {
    realUrl: String,
    miniUrl: {
      type: String,
      default: () => nanoid(4),
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Url", urlSchema);
