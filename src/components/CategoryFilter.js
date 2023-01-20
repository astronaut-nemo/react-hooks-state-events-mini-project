import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  
  // Event Handlers
  function handleClick(event){
    event.target.className = "selected";
    setSelectedCategory(event.target.name);
  }
  // console.log(categories)

  const buttonsToDisplay = categories.map((category) =>{
    // If the name === selectedCategory, then set className = "selected"; else set className=""
    if(category === selectedCategory){
      return (
        <button
          key={category}
          name={category}
          className="selected"
          onClick={handleClick}
        >
          {category}
        </button>
      )
    }
    return (
      <button
        key={category}
        name={category}
        className=""
        onClick={handleClick}
      >
        {category}
      </button>
    )
  }
  );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonsToDisplay}
    </div>
  );
}

export default CategoryFilter;
