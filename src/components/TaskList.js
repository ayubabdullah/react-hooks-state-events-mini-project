import React from "react";
import Task from "./Task";
function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} category={task.category} text={task.text} onTaskDelete={onTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;
