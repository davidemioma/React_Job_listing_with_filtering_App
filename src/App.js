import { Fragment } from "react";
import Top from "./components/Header/Top";
import JobFilters from "./components/JobFilters/JobFilters";
import JobListings from "./components/Jobs/JobListings";
import IndexContext from "./store/index-context";
import { useContext } from "react";

function App() {
  const ctx = useContext(IndexContext);

  const isNotEmpty = ctx.jobFilters.length > 0;

  return (
    <Fragment>
      <Top />
      {isNotEmpty && <JobFilters />}
      <JobListings />
    </Fragment>
  );
}

export default App;
