import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JobList = ({ jobTitiles }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Cancel muiltipe request going out at the sametime
    const cancelToken = axios.CancelToken.source();
    //https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json
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
        <h1 className="text-danger">
          {jobTitiles}
          <small
            className="text-muted float-right mt-4"
            style={{ fontSize: "12px" }}
          >
            # of Available Jobs &nbsp;
            <span className="text-primary">{jobs.length}</span> &nbsp; | Built
            with React js library & axios | By
            <Link to="http://mahmoudosman.com/"> Mahmoud Osman</Link>
          </small>
        </h1>
        <hr />
        <br />
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
                      <Link
                        to={job.url}
                        className="text-danger ml-2 font-weight-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Apply</strong>
                      </Link>
                    </p>
                    <p>
                      <Link
                        to={`/jobs/${job.id}`}
                        className="text-info font-weight-bold"
                      >
                        Read More...
                      </Link>
                    </p>
                  </li>
                </ul>
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
