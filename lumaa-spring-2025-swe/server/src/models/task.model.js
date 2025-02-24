const { pool } = require('../config/db');

const getTasks = async (userId) => {
  const result = await pool.query('SELECT * FROM tasks WHERE user_id = $1 order by id desc', [userId]);
  return result.rows;
};

const createTask = async (title, description, userId) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, user_id) VALUES ($1, $2, $3) RETURNING *',
    [title, description, userId]
  );
  return result.rows[0];
};

const updateTask = async (id, title, description, isComplete) => {
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2, is_complete = $3 WHERE id = $4 RETURNING *',
    [title, description, isComplete, id]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
