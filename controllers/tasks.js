const { Task } = require("../models/Task");

const create = async (data) => {
    try {
        const task = new Task(data);
        return await task.save();
    } catch (error) {
        console.log('on controller error: ', error)
        return error
    }
}

const findAll = async (filter = {}) => {
    try {
        return await Task.find(filter);
    } catch (error) {
        return error
    }
}

const findOne = async (queryData = {}) => {
    try {
        return await Task.findOne(queryData);
    } catch (error) {
        return error
    }
}

const update = async (filter = {}, data) => {
    try {
        await Task.findOneAndUpdate(filter, data, { new: true });
        return await findOne(filter)
    } catch (error) {
        return error
    }
}

const remove = async (filter = {}) => {
    try {
        return await Task.findOneAndRemove(filter);
    } catch (error) {
        return error
    }
}

module.exports = { create, findAll, findOne, update, remove }