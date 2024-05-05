import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterJobByCompany,
  filterJobByExpericance,
  filterJobByLocation,
  filterJobByRoles,
  filterJobBySalary,
} from "../features/jobData/jobDataSlice";

function FilterDropdown({
  locations,
  MinBaseSalary,
  MinExperiance,
  roles,
  comapnyNames,
  handleClose,
}) {
  const [filterData, setfilterData] = useState({
    locations: "",
    MinBaseSalary: "",
    MinExperiance: "",
    roles: "",
    comapnyNames: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setfilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "locations") {
      dispatch(filterJobByLocation(e.target.value));
    }
    if (e.target.name === "MinBaseSalary") {
      dispatch(filterJobBySalary(e.target.value));
    }
    if (e.target.name === "MinExperiance") {
      dispatch(filterJobByExpericance(e.target.value));
    }
    if (e.target.name === "roles") {
      dispatch(filterJobByRoles(e.target.value));
    }
    if (e.target.name === "comapnyNames") {
      dispatch(filterJobByCompany(e.target.value));
    }

    handleClose();
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Location</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={filterData.locations}
          name="locations"
          label="Location"
          onChange={handleChange}
        >
          {Array.from(locations).map((ele, i) => (
            <MenuItem value={ele} key={i}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Min experience</InputLabel>
        <Select
          name="MinExperiance"
          value={filterData.MinExperiance}
          label="Min experience"
          onChange={handleChange}
        >
          {Array.from(MinExperiance).map((ele, i) => (
            <MenuItem value={ele} key={i}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Company name</InputLabel>
        <Select
          name="comapnyNames"
          value={filterData.comapnyNames}
          label="Company name"
          onChange={handleChange}
        >
          {Array.from(comapnyNames).map((ele, i) => (
            <MenuItem value={ele} key={i}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Role</InputLabel>
        <Select
          name="roles"
          value={filterData.roles}
          label="Age"
          onChange={handleChange}
        >
          {Array.from(roles).map((ele, i) => (
            <MenuItem value={ele} key={i}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Min base pay</InputLabel>
        <Select
          name="MinBaseSalary"
          value={filterData.MinBaseSalary}
          label="Min base pay"
          onChange={handleChange}
        >
          {Array.from(MinBaseSalary).map((ele, i) => (
            <MenuItem value={ele} key={i}>
              {ele}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterDropdown;
