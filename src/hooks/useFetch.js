import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .then((res) => {
        console.log("requesting");
        return res;
      });
  }, [url]);
  return data;
};

export default useFetch;
