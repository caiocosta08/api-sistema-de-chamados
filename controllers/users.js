const { User } = require("../models/User");

const create = async (data) => {
    try {
        const exists = await User.findOne({ email: data.email });
        if (exists) return 'user_already_exists'
        const user = new User(data);
        return await user.save();
    } catch (error) {
        console.log('on controller error: ', error)
        return error
    }
}

const findAll = async (filter = {}) => {
    try {
        return await User.find(filter);
    } catch (error) {
        return error
    }
}

const findOne = async (queryData = {}) => {
    try {
        return await User.findOne(queryData);
    } catch (error) {
        return error
    }
}

const update = async (filter = {}, data) => {
    try {
        await User.findOneAndUpdate(filter, data, { new: true });
        return await findOne(filter)
    } catch (error) {
        return error
    }
}

const remove = async (filter = {}) => {
    try {
        return await User.findOneAndRemove(filter);
    } catch (error) {
        return error
    }
}

module.exports = { create, findAll, findOne, update, remove }