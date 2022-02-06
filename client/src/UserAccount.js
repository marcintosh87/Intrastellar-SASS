import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function UserAccount({ currentUser }) {
  return (
    <div style={{ backgroundColor: "#F7F9FC", minHeight: "100%" }}>
      <Typography color={"secondary"} variant={"h4"} mb={5}>
        My Profile
      </Typography>
      <Card>
        <CardHeader title="User Details" sx={{ backgroundColor: "#F8F8FC" }} />
        <CardContent sx={{ backgroundColor: "#fff" }}>
          <Box display={"Flex"} flexDirection={"row"} flexWrap={"wrap"}>
            <Avatar
              src={currentUser.profile_image}
              variant="square"
              sx={{ width: "150px", height: "auto" }}
            />
            <Box display={"flex"} flexDirection={"column"} ml={4}>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Name:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {`${currentUser.first_name} ${currentUser.last_name}`}
              </Typography>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Email:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {`${currentUser.email}`}
              </Typography>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Phone:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {`${currentUser.phone}`}
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} ml={4}>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Position:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {currentUser.position}
              </Typography>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Department:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {`${currentUser.division.name}`}
              </Typography>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Role:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {currentUser.administrator ? "Administrator" : "Standard user"}
              </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} ml={4}>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Hire Date:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {currentUser.hire_date}
              </Typography>
              <Typography color={"secondary.dark"} variant="subtitle1">
                Active:
              </Typography>
              <Typography color={"secondary.dark"} variant="h6">
                {currentUser.active ? "Active Employee" : "Non-Active Employee"}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
