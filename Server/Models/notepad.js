const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notepadSchema = new Schema({
  Content: String,
  Subject: String,
  Date: String
});

const Notepad = mongoose.model("notepad", notepadSchema);
module.exports = Notepad;
