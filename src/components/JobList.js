import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const JobList = ({ jobTitiles }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Cancel muiltipe request going out at the sametime
    const cancelToken = axios.CancelToken.source();
    const baseURL =
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    axios
      .get(baseURL, {
        params: { markdown: true },
      })
      .then((res) => {
        setJobs(res.data);
        console.log(res);
        setisLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
      });

    return () => {
      cancelToken.cancel();
    };

    // empty dependency array
  }, []);

  return (
    <section className="job--lists">
      <div className="container">
        <h1 className="text-info">{jobTitiles}</h1> <hr />
        <div className="row">
          {isLoading && (
            <div
              className="spinner-border text-muted mt-5"
              title="loading data..."
              style={{ margin: "0 auto" }}
            ></div>
          )}

          <div className="col-md-12">
            {jobs.map((job) => (
              <div className="jobs_data" key={job.id}>
                <ul className="list-group mb-2">
                  <li className="list-group-item">
                    <p className="text-muted">
                      <img src={job.company_logo} alt={job.company} /> &nbsp;
                      <a href={`/jobs/${job.id}`}>{job.title}</a> | &nbsp;
                      <span className="text-muted">{job.type}</span> | &nbsp;
                      <span className="text-muted">
                        {new Date(job.created_at).toLocaleDateString()}
                      </span>
                      &nbsp; | {job.company} &nbsp; | &nbsp;
                      <span className="text-muted">{job.location}</span> &nbsp;
                      |
                      <a
                        href={job.how_to_apply}
                        className="text-info ml-2 font-weight-bold"
                      >
                        <strong>Apply</strong>
                      </a>
                    </p>
                  </li>
                </ul>
                <p>
                  <a
                    className="btn btn-primary"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Read More...
                  </a>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">{job.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger text-center mt-5">{error}</div>
      )}
    </section>
  );
};

export default JobList;
