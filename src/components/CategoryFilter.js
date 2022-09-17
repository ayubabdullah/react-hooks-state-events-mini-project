import React from "react";

function CategoryFilter({ categories, selectedCategory, onFilterClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? "selected" : ""}
          key={category}
          onClick={() => onFilterClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
