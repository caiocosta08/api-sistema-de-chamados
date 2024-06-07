const { Router } = require('express');
const TaskServices = require('../controllers/tasks');

const router = Router();

router.post('/tasks', async (req, res) => {
    try {
        const user = await TaskServices.create(req.body);
        if (!user) {
            return res.status(400).send({ error: 'Task creation failed' });
        }
        else {
            console.log('Task created successfully: ', user);
            return res.status(201).send(user);
        }
    } catch (error) {
        console.error('Error on user creation: ', error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await TaskServices.findAll();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


router.get('/tasks_by_user_id/:user_id', async (req, res) => {
    try {
        const tasks = await TaskServices.findAll({ user_id: req.params.user_id });
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/tasks/:id', async (req, res) => {
    try {
        const user = await TaskServices.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/tasks/:id', async (req, res) => {
    try {
        console.log(req.params, req.body)
        const user = await TaskServices.update({ _id: req.params.id }, req.body);
        console.log(user)
        if (!user) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const user = await TaskServices.remove({ _id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'Task not found' });
        }
        res.status(200).send({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;