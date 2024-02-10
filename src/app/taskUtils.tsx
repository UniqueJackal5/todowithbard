// taskUtils.ts

export const onTaskComplete = (taskId: number, isChecked: boolean, tasks: Task[]) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const updatedTask = { ...tasks[taskIndex], completed: isChecked };
    const updatedTasks = [...tasks.slice(0, taskIndex), updatedTask, ...tasks.slice(taskIndex + 1)];
    return updatedTasks;
  };