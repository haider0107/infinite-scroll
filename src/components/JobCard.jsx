import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function JobCard({ res }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const maxLength = 200;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = (description) => {
    if (showFullDescription) {
      return description;
    }

    return description.slice(0, maxLength) + "...";
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        padding: "10px",
        marginBottom: "30px",
        border: "1px solid #ccc",
        borderRadius: "20px",
      }}
    >
      <Grid container spacing={2}>
        {/* Image on the left */}
        <Grid item xs={3}>
          <CardMedia
            component="img"
            image={res.logoUrl}
            alt="Image"
            style={{
              width: "90%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <CardContent>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "gray" }}
            >
              {res.companyName}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: "capitalize", marginY: 1 }}
            >
              {res.jobRole}
            </Typography>
            <Typography variant="caption" sx={{ textTransform: "capitalize" }}>
              {res.location}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body2" sx={{ fontWeight: "bold", color: "gray" }}>
            {/* condition for null Salary value */}
          Estimated Salary :{" "}
          {res.minJdSalary !== null && res.maxJdSalary !== null
            ? `$${res.minJdSalary} - $${res.maxJdSalary}`
            : res.minJdSalary !== null
            ? `$${res.minJdSalary}`
            : `$${res.maxJdSalary}`}{" "}
          LPA
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          About Company
        </Typography>
        <Typography variant="body2">
          {displayDescription(res.jobDetailsFromCompany)}
        </Typography>
        {/* Added to show "View more" button which will show whole description */}
        {!showFullDescription &&
          res.jobDetailsFromCompany.length > maxLength && (
            <div style={{ textAlign: "center" }}>
              <Button onClick={toggleDescription} size="small" color="primary">
                View More
              </Button>
            </div>
          )}
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", color: "gray", marginTop: 2 }}
        >
          Minimum Experiance
        </Typography>

        <Typography variant="body2">
          {res.minExp !== null && res.maxExp !== null
            ? `${res.minExp} - ${res.maxExp} years`
            : ""}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ width: "100%", marginBottom: "8px", background:"#7FFFD4",color:"black" }}
        >
          Easy Apply
        </Button>
        <Button variant="contained" size="small" sx={{ width: "100%",background:"#7F00FF" }}>
          Unlock referral asks
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
