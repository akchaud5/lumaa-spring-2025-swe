const { getTasks, createTask, updateTask, deleteTask } = require('../models/task.model');

const getAllTasks = async (req, res) => {
  const tasks = await getTasks(req.user.id);
  res.json(tasks);
};

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await createTask(title, description, req.user.id);
  res.status(201).json(task);
};

const editTask = async (req, res) => {
  const { title, description, isComplete } = req.body;
  const task = await updateTask(req.params.id, title, description, isComplete);
  res.json(task);
};

const removeTask = async (req, res) => {
  await deleteTask(req.params.id);
  res.json({ message: 'Task deleted' });
};

module.exports = { getAllTasks, addTask, editTask, removeTask };
