import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import hero from "./images/newsfeed-hero.png";
import video from "./images/ceo-message-placeholder.png";
import { Box } from "@mui/system";
import NewsCard from "./NewsCard";
// styles for background
const styles = {
  paperContainer: {
    height: "400px",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

export default function Newsfeed({ newsPost }) {
  const [filter, setFilter] = useState("Sort by");
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClaps = (e) => {
    "";
  };
  return (
    <>
      <section style={styles.paperContainer}>
        <Grid container wrap="nowrap">
          <Grid item xs={5} sx={{ mt: 2, ml: 4 }}>
            <Typography variant="h5" color={"#fff"} align="left">
              A MESSAGE FROM OUR CEO
            </Typography>
            <img
              src={video}
              alt=""
              style={{ width: "100%", margin: "5px 0px" }}
            />
            <Typography sx={{ fontSize: "14px", fontFamily: "Open Sans" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={5} sx={{ mt: 4 }}>
            <Typography variant="body1" color={"white"}>
              We are an outstanding collective of caregivers representing
              various cultures, beliefs, backgrounds, and life experiences.
            </Typography>
            <Button
              size="small"
              variant="contained"
              color={"white"}
              sx={{ mt: 1, borderRadius: 16, boxShadow: 0 }}
            >
              <span style={{ color: "#999999" }}>Learn More</span>
            </Button>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </section>
      <main>
        <Grid container>
          <Grid item xs={5}>
            <Typography
              align="left"
              variant="h3"
              ml={9}
              mt={4}
              color="secondary"
            >
              NEWSFEED
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2} mt={5.5} px={1}>
            <FormControl fullWidth>
              <InputLabel id="news-feed-select" sx={{ color: "#00539A" }}>
                Sort by
              </InputLabel>
              <Select
                labelId="news-feed-select"
                id="news-feed-select"
                value={filter}
                label="Sort by"
                sx={{ height: "40px" }}
                onChange={handleChange}
              >
                <MenuItem value={"Sort by"}></MenuItem>
                <MenuItem value={"Date"}>Date</MenuItem>
                <MenuItem value={"Division"}>Department</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} mt={4.5}>
            <Box
              component="form"
              sx={{
                m: 1,
                width: "25ch",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
                value={search}
                onChange={handleSearch}
                InputLabelProps={{
                  style: { color: "#00539A" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Divider variant="inset" />
      </main>
      <aside>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            pb: 7,
            ml: 7,
          }}
        >
          {newsPost &&
            newsPost.map((post) => (
              <NewsCard
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                claps={post.claps}
                image={post.image_post}
                date={post.date}
              />
            ))}
        </Box>
      </aside>
    </>
  );
}
