const { Router } = require('express');
const UserServices = require('../controllers/users');

const router = Router();

router.post('/users', async (req, res) => {
    try {
        const user = await UserServices.create(req.body);
        if (!user) {
            return res.status(400).send({ error: 'User creation failed' });
        }
        else if (user === 'user_already_exists') {
            return res.status(409).send({ error: 'User already exists' });
        }
        else {
            console.log('User created successfully: ', user);
            return res.status(201).send(user);
        }
    } catch (error) {
        console.error('Error on user creation: ', error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await UserServices.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await UserServices.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        console.log(req.params, req.body)
        const user = await UserServices.update({ _id: req.params.id }, req.body);
        console.log(user)
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await UserServices.remove({ _id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send({ message: 'User deleted' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) throw new Error('Missing params: email or password')
        const user = await UserServices.findOne({ email, password });
        if (!user) {
            return res.status(404).send({ error: 'user_not_found_or_incorrect_password' });
        }
        return res.status(200).send(user);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;