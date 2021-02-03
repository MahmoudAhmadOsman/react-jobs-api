import { useState, useEffect } from "react";
import JobList from "./JobList";

import useFetch from "./useFetch";

const Home = () => {
  const { data: jobs, isLoading, error } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
  );
  //https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json

  return (
    <section className="home--container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {jobs && <JobList />}

            {error && (
              <div
                className="alert alert-danger"
                style={{ marginTop: "9rem", textAlign: "center" }}
              >
                <strong>
                  <i className="fa fa-warning mr-1"></i>
                  {error}
                </strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
