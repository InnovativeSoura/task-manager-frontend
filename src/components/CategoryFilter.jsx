const CategoryFilter = ({ setFilter }) => {
  return (
    <div className="filter-container">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
    </div>
  );
};

export default CategoryFilter;