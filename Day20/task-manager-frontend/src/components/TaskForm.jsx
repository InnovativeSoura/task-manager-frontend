import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      title,
      category,
    });

    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </select>

      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;