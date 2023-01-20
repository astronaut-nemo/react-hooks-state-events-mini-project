import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // States
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  });

  // Event Handlers
  function handleChange(event){
    setFormData({...formData, 
      [event.target.name] : event.target.value
    })
    
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(formData);
  }

  const optionsToDisplay = categories.map((category) => {
    if(category !== "All"){
      return <option key={category}>{category}</option>
    }
    return ""
  });

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input
          type="text"
          name="text"
          value = {formData.task}
          onChange={handleChange}
          placeholder="Task"
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value = {formData.category}
          onChange={handleChange}
        >
          {/* render <option> elements for each category here */}
          {optionsToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
