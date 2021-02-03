import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const JobsDetails = () => {
  const jobsDetailsTitle = "Job Details";

  const [data: jobs, setJobs] = useState(null);
  //Loading state
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  //Get single job by its id
  const { id } = useParams();

  return (
    <section className="jobs--details">
      {/* Start of loadind and error */}
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            {isLoading && (
              <div
                className="spinner-border text-muted mt-5"
                title="loading data..."
                style={{ margin: "0 auto" }}
              ></div>
            )}
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
      </div> */}
      {/* End of loadind and error */}

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-info mt-3">
              {jobsDetailsTitle}
              <Link to="/" className="text-secondary">
                <i
                  className="fa fa-chevron-left pull-right"
                  title="Go back"
                ></i>
              </Link>
            </h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <p>description</p>
            Job ID: {id}
          </div>
          <div className="col-md-2">
            <Link to="#" className="text-danger font-weight-bold">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsDetails;
