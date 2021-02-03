// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Cancel muiltipe request going out at the sametime
    const cancelToken = axios.CancelToken.source();
    //const baseURL ="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    axios
      .get(url, {
        params: {
          markdown: true,
          description: true,
          how_to_apply: true,
        },
      })
      .then((res) => {
        setData(res.data);
        //setJobs(res.data);
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
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
