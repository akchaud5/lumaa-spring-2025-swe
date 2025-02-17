import { useState } from 'react';

interface TaskFormProps {
  onSubmit: (title: string, description?: string) => void;
  initialTitle?: string;
  initialDescription?: string;
  isEditing?: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialTitle = '', initialDescription = '', isEditing = false }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Task Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Description (optional)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
