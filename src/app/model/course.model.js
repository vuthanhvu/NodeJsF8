const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String },
        videoId: { type: String },
    },
    {
        timeStage: true,
    },
);

module.exports = mongoose.model('Course', Course);
