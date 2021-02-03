import React from "react";
import { Link, useParams } from "react-router-dom";

const JobsDetails = () => {
  const jobsDetailsTitle = "Job Details";
  //Get single job by its id
  const { id } = useParams();
  return (
    <section className="jobs--details">
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
