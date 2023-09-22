const mongoose = require('mongoose')
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const petSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true,
    },
    fosterName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg'
    },
    getsUpdates: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('pet', petSchema);