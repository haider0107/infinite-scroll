import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobs,
  filterJobByCompany,
  filterJobByExpericance,
  filterJobByLocation,
  filterJobByRoles,
  filterJobBySalary,
} from "../features/jobData/jobDataSlice";

function useFetchJobs(init = false) {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [locations, setLocations] = useState(new Set());
  const [MinBaseSalary, setMinBaseSalary] = useState(new Set());
  const [MinExperiance, setMinExperiance] = useState(new Set());
  const [comapnyNames, setComapnyNames] = useState(new Set());
  const [roles, setRoles] = useState(new Set());

  const [filterData, setfilterData] = useState({
    locations: "",
    MinBaseSalary: "",
    MinExperiance: "",
    roles: "",
    comapnyNames: "",
  });

  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: 50,
          offset,
        }
      );

      dispatch(addJobs(data.jdList));
      setFilters(data.jdList);
      applyFilter()
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

  const applyFilter = () => {
    if (filterData.locations) {
      dispatch(filterJobByLocation(filterData.locations));
    }
    if (filterData.MinBaseSalary) {
      dispatch(filterJobBySalary(filterData.MinBaseSalary));
    }
    if (filterData.MinExperiance) {
      dispatch(filterJobByExpericance(filterData.MinExperiance));
    }
    if (filterData.roles) {
      dispatch(filterJobByRoles(filterData.roles));
    }
    if (filterData.comapnyNames) {
      dispatch(filterJobByCompany(filterData.comapnyNames));
    }
  };

  useEffect(() => {
    if (init) {
      fetchData();
    }
  }, [offset]);

  return {
    setOffset,
    loading,
    locations,
    MinBaseSalary,
    MinExperiance,
    roles,
    comapnyNames,
    filterData,
    applyFilter,
    setfilterData,
  };
}

export default useFetchJobs;
