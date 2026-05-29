import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;