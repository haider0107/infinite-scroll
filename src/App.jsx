import { useState } from "react";
import Data from "./assets/data.json";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Job Search
        </Typography>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((res, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "10px", marginBottom: "30px" }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={res.image}
                  title="green iguana"
                  style={{ borderRadius: "5px" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {res.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {res.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small">
                    Share
                  </Button>
                  <Button variant="contained" size="small">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
