import classes from "./JobItem.module.css";

function JobItem(props) {
  const onClickHandler = (e) => {
    if (e.target.dataset.value) {
      props.onFilterValue(e.target.textContent);
    }
  };

  return (
    <div className={classes.job}>
      <img src={props.logo} alt={props.company} />

      <div className={classes.top}>
        <div className={classes.info}>
          <p>{props.company}</p>
          {props.new && <span className={classes.new}></span>}
          {props.featured && <span className={classes.featured}></span>}
        </div>

        <p className={classes.position}>{props.position}</p>

        <div className={classes.postionInfo}>
          <p>{props.postedAt}</p>
          <p>{props.contract}</p>
          <p>{props.location}</p>
        </div>
      </div>

      <div className={classes.filters} onClick={onClickHandler}>
        <span data-value={props.role}>{props.role}</span>

        <span data-value={props.level}>{props.level}</span>

        <div className={classes.languages}>
          {props.languages.map((language) => (
            <span key={language} data-value={language}>
              {language}
            </span>
          ))}
        </div>

        <div className={classes.tools}>
          {props.tools.map((tool) => (
            <span key={tool} data-value={tool}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobItem;
