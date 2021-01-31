import { useState, useEffect } from "react";
import JobList from "./JobList";

const Home = () => {
  //   const { jobs, setJobs } = useState([]);
  const jobTitiles = "Latest Jobs";

  return (
    <section className="home--container">
      {/* {<JobList jobs={jobs} setJobs={setJobs} jobTitiles={jobTitiles} />} */}
      {<JobList jobTitiles={jobTitiles} />}
    </section>
  );
};

export default Home;
