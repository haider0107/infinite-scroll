import { Box, Button, Modal, useMediaQuery } from "@mui/material";
import React from "react";
import FilterDropdown from "./FilterDropdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Filters({
  locations,
  MinBaseSalary,
  MinExperiance,
  roles,
  comapnyNames,
  applyFilter,
  setfilterData,
  filterData,
  setOffset
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  return isMobile ? (
    <>
      <Button variant="contained" sx={{marginTop:2}} onClick={handleOpen}>Filter Jobs</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FilterDropdown
            locations={locations}
            MinBaseSalary={MinBaseSalary}
            MinExperiance={MinExperiance}
            roles={roles}
            comapnyNames={comapnyNames}
            handleClose={handleClose}
            setfilterData={setfilterData}
            applyFilter={applyFilter}
            filterData={filterData}
            setOffset={setOffset}
          />
        </Box>
      </Modal>
    </>
  ) : (
    <FilterDropdown
      locations={locations}
      MinBaseSalary={MinBaseSalary}
      MinExperiance={MinExperiance}
      roles={roles}
      comapnyNames={comapnyNames}
      handleClose={handleClose}
      setfilterData={setfilterData}
      applyFilter={applyFilter}
      filterData={filterData}
      setOffset={setOffset}
    />
  );
}

export default Filters;
