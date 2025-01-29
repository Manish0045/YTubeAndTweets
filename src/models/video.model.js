const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,
        required: [true, 'Video file is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true
    },
    thumbnail: {
        type: String,
        required: [true, 'Thumbnail is required']
    },
    videoUrl: {
        type: String,
        required: [true, 'Video URL is required']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required']
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    viewCount: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = {
    Video: mongoose.model('Video', videoSchema)
}