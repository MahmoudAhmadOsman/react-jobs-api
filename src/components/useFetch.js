import axios from "axios";
import { useState, useEffect } from "react";

useEffect(() => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
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
