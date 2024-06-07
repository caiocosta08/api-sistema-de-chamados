const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({ 
    name: { type: String },
    description: { type: String },
    status: { type: String },
    user_id: { type: String },
    created_at: { type: Date, default: new Date() },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task }