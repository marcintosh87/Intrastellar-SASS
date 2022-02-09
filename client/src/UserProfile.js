import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import EmployeeDir from "./EmployeeDir";
import Messages from "./Messages";
import UserAccount from "./UserAccount";

export default function UserProfile({
  currentUser,
  setRefresh,
  refresh,
  setCurrentUser,
  newsPost,
  eventPost,
}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (loading) {
    return (
      <Typography variant="caption" color={"primary"}>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="caption" color={"primary"}>
        There is an error
      </Typography>
    );
  }
  return (
    <div style={{ backgroundColor: "#F7F9FC", minHeight: "100%" }}>
      <Box display={"flex"} component={"main"}>
        <Box
          sx={{ width: "20%", minHeight: "2000px" }}
          py={5}
          component={"aside"}
          bgcolor={"#09142C"}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems="flex-start"
            spacing={5}
            style={{ marginLeft: "15px" }}
          >
            <Box m={"auto"} mb={5}>
              <Typography variant="h5" color={"#fff"} align="center">
                {`${currentUser.first_name} ${currentUser.last_name}`}
              </Typography>

              <Typography
                variant="subtitle2"
                fontSize={16}
                align="center"
                color={"#fff"}
              >
                {`${currentUser.position} `}
              </Typography>
            </Box>
            <hr style={{ width: "90%" }} />
            <NavLink
              to={`/profile/${currentUser.id}/user-account`}
              className="react-link"
            >
              <Button color="white" sx={{ height: "75%" }}>
                <i
                  className="fa fa-user"
                  style={{ fontSize: "25px", marginRight: "5px" }}
                  aria-hidden="true"
                ></i>{" "}
                User Account
              </Button>
            </NavLink>
            <hr style={{ width: "90%" }} />
            {currentUser.administrator && !loading ? (
              <NavLink
                to={`/profile/${currentUser.id}/admin-dashboard`}
                className="react-link"
              >
                <Button color="white">
                  <i
                    className="fa fa-tachometer"
                    style={{ fontSize: "25px", marginRight: "5px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  Admin Dashboard
                </Button>
              </NavLink>
            ) : null}

            {currentUser.administrator ? <hr style={{ width: "90%" }} /> : null}
            <NavLink
              to={`/profile/${currentUser.id}/messages`}
              className="react-link"
            >
              <Button color="white">
                <i
                  className="fa fa-comment"
                  style={{ fontSize: "25px", marginRight: "5px" }}
                  aria-hidden="true"
                ></i>{" "}
                Messages
              </Button>
            </NavLink>
            <hr style={{ width: "90%" }} />

            <NavLink
              to={`/profile/${currentUser.id}/employee-directory`}
              className="react-link"
            >
              <Button color="white">
                <i
                  style={{ fontSize: "25px", marginRight: "5px" }}
                  className="fa fa-address-book"
                  aria-hidden="true"
                ></i>{" "}
                Employee Directory
              </Button>
            </NavLink>
          </Stack>
        </Box>
        <Box width={"82%"} m={4}>
          <Routes>
            {currentUser.administrator ? (
              <Route
                path="admin-dashboard/*"
                element={
                  <AdminDashboard
                    currentUser={currentUser}
                    newsPost={newsPost}
                    eventPost={eventPost}
                    setRefresh={setRefresh}
                    refresh={refresh}
                  />
                }
              />
            ) : null}
            <Route
              path="user-account"
              element={
                <UserAccount
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              }
              activeClassName="active"
            />
            {!loading ? (
              <Route
                path="employee-directory"
                element={
                  <EmployeeDir users={users} currentUser={currentUser} />
                }
                activeClassName="active"
              />
            ) : null}
            {!loading ? (
              <Route
                path="messages"
                element={<Messages currentUser={currentUser} bUsers={users} />}
                activeClassName="active"
              />
            ) : null}
          </Routes>
        </Box>
      </Box>
    </div>
  );
}
