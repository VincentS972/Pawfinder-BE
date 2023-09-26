
const mongoose = require('mongoose')
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const petSchema = new mongoose.Schema({
    profilePicture: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg'
    },
    petName: {
        type: String,
        required: true,
    },
    fosterName: {
        type: String,
        required: true
    },
    petGender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
      },
      petType: {
        type: String
      },
      petAge: {
        type: String,
        required: true
      },
      petBio: {
        type: String
      },
    getsUpdates: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Pet', petSchema);