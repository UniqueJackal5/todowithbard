import React from 'react';
import NewTaskForm from './newTaskForm';  

function TaskList({ tasks, addNewTask, onTaskComplete }) { 
  return (
    <ul className="list-none px-4 py-2">
      <li key="addTaskForm">
        <NewTaskForm addNewTask={addNewTask} /> 
      </li>
      {tasks.map((task) => (
        <li key={task.id} className="py-2 border-b border-gray-200 text-lg">
          <input
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.completed}
            onChange={(e) =>
              onTaskComplete(task.id, e.target.checked, tasks) // Pass tasks directly
            }
            className="mr-2"
          />
          {task.description}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;