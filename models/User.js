const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    department: { type: String },
    created_at: { type: Date, default: new Date() },
});

const User = mongoose.model('User', UserSchema);

module.exports = { User }