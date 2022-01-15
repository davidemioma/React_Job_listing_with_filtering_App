import classes from "./FilterItem.module.css";
import iconRemove from "../../assets/icon-remove.svg";
import IndexContext from "../../store/index-context";
import { useContext } from "react";

function FilterItem(props) {
  const filterCTX = useContext(IndexContext);

  const removeFilter = () => {
    filterCTX.removeFilter(props.value);
  };

  return (
    <div className={classes.filter}>
      <span className={classes.name}>{props.value}</span>
      <span onClick={removeFilter} className={classes.remove}>
        <img src={iconRemove} alt="" />
      </span>
    </div>
  );
}

export default FilterItem;
