import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function JobCard({ res }) {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ padding: "10px", marginBottom: "30px" }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={res.logoUrl}
        title="green iguana"
        style={{ borderRadius: "5px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {res.companyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {res.jobDetailsFromCompany}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            setOffset((prev) => prev + 10);
          }}
          variant="contained"
          size="small"
        >
          Share
        </Button>
        <Button
          onClick={() => {
            dispatch(filterJobByLocation("delhi ncr"));
            console.log(data);
          }}
          variant="contained"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default JobCard;
