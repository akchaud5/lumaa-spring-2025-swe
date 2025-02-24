import { useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Tasks = () => {
  const { logout } = useContext(AuthContext)!;
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [taskUpdates, setTaskUpdates] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks');
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = async () => {
    try {
      await api.post('/tasks', { title: newTask, description: '', isComplete: false });
      setNewTask('');
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateTask = async (id: number) => {
    try {
      if (taskUpdates[id]) {
        await api.put(`/tasks/${id}`, { title: taskUpdates[id] });
      }
      setEditingTaskId(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleMarkComplete = async (id: number, title: string, completed: boolean) => {
    try {
      await api.put(`/tasks/${id}`, { title: title, isComplete: !completed });
      setEditingTaskId(null);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (id: number, value: string) => {
    setTaskUpdates((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <div className="header">
        <h2>Tasks</h2>
        <div className="logout-container">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="task-container">
        <div className="task-input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <div className="task-list-container">
          {/* Task List Section */}
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item" style={{ backgroundColor: task.is_complete ? '#d3ffd3' : 'white' }}>

                {editingTaskId === task.id ? (
                  <input
                    type="text"
                    value={taskUpdates[task.id] || task.title}
                    onChange={(e) => handleInputChange(task.id, e.target.value)}
                    onBlur={() => handleUpdateTask(task.id)}
                    onKeyDown={(e) => e.key === 'Enter' && handleUpdateTask(task.id)}
                    disabled= {task.is_complete}
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => setEditingTaskId(task.id)}
                  >
                    {task.title}
                  </span>
                )}
                <button onClick={() => setEditingTaskId(task.id)} disabled={task.is_complete}>Update</button>
                <button onClick={() => handleDeleteTask(task.id)} disabled={task.is_complete}>Delete</button>
                <button onClick={() => handleMarkComplete(task.id, task.title, task.is_complete)}>
                  {task.is_complete ? 'Undo' : 'Mark as Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
