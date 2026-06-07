const TaskCard = ({ task, deleteTask, editTask }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.category}</p>

      <button onClick={() => editTask(task)}>
        Edit
      </button>

      <button onClick={() => deleteTask(task._id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskCard;