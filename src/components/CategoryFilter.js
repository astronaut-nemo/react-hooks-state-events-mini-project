import React from "react";

function CategoryFilter({ categories, setSelectedCategory }) {

  // Event Handlers
  function handleClick(event){
    event.target.className = "selected";
    setSelectedCategory(event.target.name);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) =>
        <button
          key={category}
          name={category}
          className=""
          onClick={handleClick}
        >
          {category}
        </button>)
      }
    </div>
  );
}

export default CategoryFilter;
