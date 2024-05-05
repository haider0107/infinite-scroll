import { Container, Grid, Typography } from "@mui/material";
import useFetchJobs from "./hooks/useFetchJobs";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "./components/JobCard";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const { getData, setOffset, setFilters } = useFetchJobs(true);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
          Job Search
        </Typography>

        <InfiniteScroll
          dataLength={data.length}
          next={() => {
            setOffset((prev) => prev + 10);
          }}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Grid container spacing={5} style={{ marginTop: "20px" }}>
            {data.map((res) => (
              <Grid item xs={12} sm={6} md={4} key={res.jdUid}>
                <JobCard res={res} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </>
  );
}

export default App;
