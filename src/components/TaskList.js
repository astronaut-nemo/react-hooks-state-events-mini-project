import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasklist }) {
  // console.log(tasks)

  // Event Handlers
  function handleClick(deletedTaskText){
    const tasklistToDisplay = tasks.filter((task) => task.text !== deletedTaskText);
    setTasklist(tasklistToDisplay);
  }
  // console.log("Updated list", tasklist)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component aka mapping function */}
      {tasks.map((task) =>
        <Task
          key={task.text}
          id={task.text}
          text={task.text}
          category={task.category}
          handleClick={handleClick}
        />
        )
      }
    </div>
  );
}

export default TaskList;
