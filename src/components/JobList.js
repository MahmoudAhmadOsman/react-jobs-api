import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import Loading from "./Loading";

import useFetch from "./useFetch";

//const JobList = (jobs or data?) =>{}
const JobList = () => {
  const jobTitiles = "Latest Jobs from Github API";
  const { data: jobs, isLoading, error } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
  );

  return (
    <section className="job--lists">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <h1 className="text-danger">
            {jobTitiles}
            <small
              className="text-muted float-right mt-4"
              style={{ fontSize: "12px" }}
            >
              # of Available Github Jobs &nbsp;
              <span className="text-primary">{jobs.length}</span> &nbsp; | Built
              with React js library & axios | By
              <Link to="http://mahmoudosman.com/"> Mahmoud Osman</Link>
            </small>
          </h1>
          <hr />
          <br />
          <div className="row">
            <div className="col-md-12">
              {jobs.map((job) => (
                <div className="jobs_data" key={job.id}>
                  <ul className="list-group mb-2">
                    <li className="list-group-item">
                      <p className="text-muted">
                        <img src={job.company_logo} alt={job.company} /> &nbsp;
                        <Link to={`/jobs/${job.id}`}>{job.title}</Link> | &nbsp;
                        <span className="text-muted">{job.type}</span> | &nbsp;
                        <span className="text-muted">
                          {new Date(job.created_at).toLocaleDateString()}
                        </span>
                        &nbsp; | {job.company} &nbsp; | &nbsp;
                        <span className="text-muted">{job.location}</span>{" "}
                        &nbsp; |
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
                        <ReactMarkdown source={job.how_to_apply} />
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
      )}
    </section>
  );
};

export default JobList;
