"use client"
import React, { useState } from 'react';

interface NewTaskFormProps {
  addNewTask: (newTaskDescription: string) => void;
}

function NewTaskForm({ addNewTask }: NewTaskFormProps) {
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTaskDescription);
    setNewTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between mt-4">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTaskDescription}
        onChange={(e) => setNewTaskDescription(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
}

export default NewTaskForm;
