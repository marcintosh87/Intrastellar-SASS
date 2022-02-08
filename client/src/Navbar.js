import React from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Grid, Menu, MenuItem } from "@mui/material";
import dummyLogo from "./images/dummy-logo.png";

export default function Navbar({ currentUser, setCurrentUser }) {
  const nav = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });
    setCurrentUser(null);
    setAnchorEl(null);
    nav("/");
  };
  return (
    <>
      <Box
        bgcolor={"#00539A"}
        fullwidth
        p={3}
        sx={{
          display: "grid",
          //   position: "fixed",

          width: "100%",
          zIndex: "100",
        }}
      >
        <Grid container spacing={2} wrap="wrap">
          <Grid item xs={3} sx={{ textAlign: "center" }}>
            <Link to="/">
              <img
                src={dummyLogo}
                alt="Dummy Logo"
                style={{ maxWidth: "200px" }}
              />
            </Link>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "center" }}>
            <Link to="/" className="react-link">
              <Button variant="text" color="white">
                Newsfeed
              </Button>
            </Link>
            <Link to="/events" className="react-link">
              <Button variant="text" color="white">
                Upcoming Events
              </Button>
            </Link>
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
          <Grid item xs={2}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                alt={currentUser.first_name}
                src={currentUser.profile_image}
              />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  nav(`/profile/${currentUser.id}/user-account`);
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>Messages</MenuItem>
              {currentUser.administrator ? (
                <MenuItem
                  onClick={() => {
                    handleClose();
                    nav(`/profile/${currentUser.id}/admin-dashboard`);
                  }}
                >
                  Admin Dashboard
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
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
