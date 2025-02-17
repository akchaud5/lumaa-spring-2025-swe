const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getAllTasks, addTask, editTask, removeTask } = require('../controllers/tasks.controller');

const router = express.Router();

router.get('/', authMiddleware, getAllTasks);
router.post('/', authMiddleware, addTask);
router.put('/:id', authMiddleware, editTask);
router.delete('/:id', authMiddleware, removeTask);

module.exports = router;
