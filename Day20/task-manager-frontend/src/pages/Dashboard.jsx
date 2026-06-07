import { useEffect, useState } from "react";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/taskService";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import CategoryFilter from "../components/CategoryFilter";
import Navbar from "../components/Navbar";

import { toast } from "react-toastify";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    const data = await getTasks(user.token);

    const sortedTasks = data.sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    );

    setTasks(sortedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await createTask(task, user.token);

    toast.success("Task Added Successfully");

    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id, user.token);

    toast.success("Task Deleted");

    fetchTasks();
  };

  const editTask = async (task) => {
    const newTitle = prompt("Edit Task", task.title);

    if (newTitle) {
      await updateTask(
        task._id,
        {
          title: newTitle,
          category: task.category,
        },
        user.token
      );

      toast.success("Task Updated");

      fetchTasks();
    }
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) => task.category === filter
        );

  return (
    <div className="dashboard">
      <Navbar />

      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <CategoryFilter setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
};

export default Dashboard;