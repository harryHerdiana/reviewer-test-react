import { useState, useEffect } from "react";
import { getProjectTasks, deleteTask, addTask } from "../utils/todoist-api";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

const TasksList = ({ projectId }) => {
  const [projectTasks, setProjectTasks] = useState([]);

  useEffect(() => {
    getProjectTasks(projectId).then((tasks) => {
      setProjectTasks(tasks);
    });
  }, [projectId]);

  const onTaskDelete = (id) => {
    deleteTask(id);
    const tasks = projectTasks.filter((task) => task.id !== id);
    setProjectTasks(tasks);
  };

  const onTaskSubmit = (text, resetForm) => {
    addTask(text, Number(projectId))
    setProjectTasks([{content: text}, ...projectTasks]);
    resetForm();
  };

  return (
    <div class="todolist__list">
      <NewTaskForm onSubmit={onTaskSubmit} />
      {/* Needs Correction: Key should be placed on the elements inside the array to give the elements a stable identity.
      For detailed explanation please check : https://reactjs.org/docs/lists-and-keys.html  */}
      <div class="todolist__tasks">
        {projectTasks.map((task) => (
          <Task task={task} onDelete={onTaskDelete} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
