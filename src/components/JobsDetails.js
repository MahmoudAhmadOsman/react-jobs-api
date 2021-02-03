import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import useFetch from "./useFetch";

const JobsDetails = () => {
  const jobsDetailsTitle = "Job Details";
  const { id } = useParams();

  const { data: job, error, isLoading } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json" +
      id
  );

  return (
    <section className="jobs--details">
      {isLoading ? (
        <Loading />
      ) : (
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
              <p className="text-muted">Coming Soon!</p>
              Job ID: {id}
              <h2>{job.title}</h2>
              <p>{job.type}</p>
            </div>
            <div className="col-md-2">
              <Link to="#" className="text-danger font-weight-bold">
                Apply
              </Link>
            </div>
          </div>

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
      )}
    </section>
  );
};

export default JobsDetails;
