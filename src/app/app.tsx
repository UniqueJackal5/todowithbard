// @ts-ignore
// Next.js expects this file to be a Server Component but because we're using useState here, we need to mark it as a Client Component
"use client"
import React, { useState } from 'react';
import Header from './header';
import TaskList from './taskList';
import { onTaskComplete } from './taskUtils';
import NewTaskForm from './newTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTaskDescription: string) => {
    setTasks([...tasks, { id: Date.now(), description: newTaskDescription, completed: false }]);
  };

  const handleTaskComplete = (taskId: number, isChecked: boolean) => {
    const updatedTasks = onTaskComplete(taskId, isChecked, tasks); // Call the imported function
    setTasks(updatedTasks);
  };

  return (
    <div className='container mx-auto'>
      <Header />
      <TaskList tasks={tasks} addNewTask={addNewTask} onTaskComplete={handleTaskComplete} />
    </div>
  );
}

export default App;
