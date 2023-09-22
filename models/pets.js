"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const petsSchema = new mongoose.Schema({
    petsName: {
        type: String,
        required: true,
    },
    fostersName: {
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

module.exports = mongoose.model('pets', petsSchema);