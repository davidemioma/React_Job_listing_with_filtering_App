import classes from "./JobListings.module.css";
import JobItem from "./JobItem";
import IndexContext from "../../store/index-context";
import { useContext } from "react";

function JobListings() {
  const jobsCTX = useContext(IndexContext);

  const getFilterValue = (value) => {
    jobsCTX.addFilter(value);
  };

  const checkJobs = (job) => {
    const languages = job.languages.map((language) => language);

    const tools = job.tools.map((tool) => tool);

    const jobTags = [job.role, job.level, ...languages, ...tools];

    const included = jobsCTX.jobFilters.every((tags) => jobTags.includes(tags));

    return included;
  };

  const filteredList = jobsCTX.jobListing.filter((job) => checkJobs(job));

  return (
    <div className="container">
      <div className={classes.jobs}>
        {filteredList.map((job) => (
          <JobItem
            key={job.company}
            onFilterValue={getFilterValue}
            logo={job.logo}
            company={job.company}
            new={job.new ? job.new : ""}
            featured={job.featured ? job.new : ""}
            position={job.position}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            role={job.role}
            level={job.level}
            languages={job.languages}
            tools={job.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default JobListings;
