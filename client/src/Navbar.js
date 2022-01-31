import React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Grid, Link } from "@mui/material";
import dummyLogo from "./images/dummy-logo.png";

export default function Navbar() {
  return (
    <>
      <Box bgcolor={"#00539A"} fullwidth p={3} sx={{ display: "grid" }}>
        <Grid container spacing={2} wrap="wrap">
          <Grid item xs={3}>
            <Link to="/">
              <img
                src={dummyLogo}
                alt="Dummy Logo"
                style={{ maxWidth: "200px" }}
              />
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Button variant="text" color="white">
              Newsfeed
            </Button>
            <Button variant="text" color="white">
              Upcoming Events
            </Button>
            <Button variant="text" color="white">
              Recognition
            </Button>
            <Button variant="text" color="white">
              Benefits
            </Button>
            <Button variant="text" color="white">
              Policies
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Avatar alt="Cindy Baker" src="" />
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor={"white"} fullwidth p={1} sx={{ display: "grid" }}>
        <Grid container spacing={2}>
          <Grid item xs={9}></Grid>

          <Grid item xs={3}>
            <i
              className="fa fa-search"
              aria-hidden="true"
              style={{ color: "#999999" }}
            ></i>{" "}
            <Button
              variant="contained"
              sx={{ ml: 2, borderRadius: 16, boxShadow: 0 }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
