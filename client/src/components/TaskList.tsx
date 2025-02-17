interface Task {
    id: number;
    title: string;
    description?: string;
    isComplete: boolean;
  }
  
  interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, updates: Partial<Task>) => void;
  }
  
  const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input 
              type="checkbox" 
              checked={task.isComplete} 
              onChange={() => onUpdate(task.id, { isComplete: !task.isComplete })} 
            />
            <span style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
              {task.title} - {task.description}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  