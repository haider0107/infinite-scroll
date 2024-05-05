import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addJobs } from "../features/jobData/jobDataSlice";

function useFetchJobs(init = false) {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [locations, setLocations] = useState(new Set());
  const [MinBaseSalary, setMinBaseSalary] = useState(new Set());
  const [MinExperiance, setMinExperiance] = useState(new Set());
  const [comapnyNames, setComapnyNames] = useState(new Set());
  const [roles, setRoles] = useState(new Set());

  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 10,
          offset,
        }
      );

      dispatch(addJobs(data.jdList));
      setFilters(data.jdList);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const setFilters = (data) => {
    const newLocations = new Set();
    const newMinExperiance = new Set();
    const newCompany = new Set();
    const newRole = new Set();
    const newMinBaseSalary = new Set();

    data.forEach((item) => {
      newLocations.add(item.location);
      newMinExperiance.add(item.minExp);
      newCompany.add(item.companyName);
      newRole.add(item.jobRole);
      newMinBaseSalary.add(item.minJdSalary);
    });

    setLocations(
      (prevLocations) => new Set([...prevLocations, ...newLocations])
    );
    setMinExperiance(
      (prevExperiance) => new Set([...prevExperiance, ...newMinExperiance])
    );
    setComapnyNames((prevCompany) => new Set([...prevCompany, ...newCompany]));
    setRoles((prevRole) => new Set([...prevRole, ...newRole]));
    setMinBaseSalary(
      (prevSalary) => new Set([...prevSalary, ...newMinBaseSalary])
    );
  };

  const getData = () => {
    const data = useSelector((state) => state);

    console.log(data);
    console.log("Location", locations);
    console.log("Experiance", MinExperiance);
    console.log("comoany", comapnyNames);
    console.log("roles", roles);
    console.log("Salary", MinBaseSalary);
  };

  useEffect(() => {
    if (init) {
      fetchData();
    }
  }, [offset]);

  return {
    getData,
    setOffset,
    loading,
    locations,
    MinBaseSalary,
    MinExperiance,
    roles,
    comapnyNames,
  };
}

export default useFetchJobs;
