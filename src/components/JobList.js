import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//const JobList = ({ jobs, setJobs, jobTitiles })
const JobList = ({ jobTitiles }) => {
  const [isLoading, setisLoading] = useState(true);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    //const cors = "https://cors-anywhere.herokuapp.com/";
    const baseURL =
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
    axios
      .get(baseURL)
      .then((res) => {
        setJobs(res.data);
        //console.log(jobs);
        setisLoading(false);
      })
      .catch((error) => {
        //this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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
              <div className="jobs_data">
                <ul class="list-group mb-2" key={job.id}>
                  <li class="list-group-item">
                    <a href={`/jobs/${job.id}`}>{job.title}</a> | &nbsp;
                    <span className="text-muted">{job.type}</span> | &nbsp;
                    <span className="text-muted">
                      {new Date(job.created_at).toLocaleDateString()}
                    </span>
                    <p className="text-muted">
                      <img
                        src={job.company_logo}
                        alt={job.company}
                        style={{ width: "20" }}
                      />
                      | {job.company}
                    </p>
                    | &nbsp;
                    <span className="text-muted">{job.location}</span>
                    <a href={job.how_to_apply} className="btn btn-info btn-sm">
                      Appy
                    </a>
                  </li>
                </ul>
                <p>
                  <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Read More...
                  </a>
                </p>

                <div class="collapse" id="collapseExample">
                  <div class="card card-body">{job.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
