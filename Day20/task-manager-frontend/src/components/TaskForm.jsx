import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Work");

  const submitHandler = (e) => {
    e.preventDefault();

    addTask({
      title,
      category,
    });

    setTitle("");
    setCategory("Work");
  };

  return (
    <form className="task-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;