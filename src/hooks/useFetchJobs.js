import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../features/jobData/jobDataSlice";

function useFetchJobs(init = false) {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const { data } = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset,
        }
      );

      dispatch(addJobs(data.jdList));

    //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = () => {
    const data = useSelector((state) => state);

    console.log(data);
  };

  useEffect(() => {
    if (init) {
      fetchData();
    }
  }, []);

  return {
    getData,
  };
}

export default useFetchJobs;
