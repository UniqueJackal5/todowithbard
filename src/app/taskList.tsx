import React from 'react';
import NewTaskForm from './newTaskForm'; 

function TaskList({ tasks, addNewTask, onTaskComplete, onDeleteTask }) { 
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
          <button
            className="ml-2 text-red-500 hover:text-red-600"
            onClick={() => onDeleteTask(task.id)}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-1-1H2a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1H9zM5 7a1 1 0 000 2h10a1 1 0 000-2H5zM5 12a1 1 0 000 2h10a1 1 0 000-2H5zM5 17a1 1 0 000 2h10a1 1 0 000-2H5z"
              />
            </svg>
          </button>
          {task.description}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;