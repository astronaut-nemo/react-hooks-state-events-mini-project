import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // States
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event Handlers
  function handleAddTask(newTask){
    // Add new task to tasks state
    setTasks([
      ...tasks,
      newTask
    ])
  }

  // Components
  const filteredTasks = tasks.filter((task) => selectedCategory==="All" ? true : task.category===selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList
        tasks={filteredTasks}
        setTasklist={setTasks}
      />
    </div>
  );
}

export default App;
