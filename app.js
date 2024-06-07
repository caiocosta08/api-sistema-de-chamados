require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB
});

app.use(express.json());
app.use(usersRoutes);
app.use(tasksRoutes);

module.exports = { app };