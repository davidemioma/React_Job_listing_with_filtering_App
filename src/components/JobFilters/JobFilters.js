import classes from "./JobFilters.module.css";
import FilterItem from "./FilterItem";
import IndexContext from "../../store/index-context";
import { useContext } from "react";

function JobFilters() {
  const filtersCTX = useContext(IndexContext);

  const clearFilters = () => {
    filtersCTX.clearFilter();
  };

  return (
    <div className="container">
      <div className={classes.filtersContainer}>
        <div className={classes.filters}>
          {filtersCTX.jobFilters.map((filter) => (
            <FilterItem key={filter} value={filter} />
          ))}
        </div>
        <button className={classes.clear} onClick={clearFilters}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default JobFilters;
