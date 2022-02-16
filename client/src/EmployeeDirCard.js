import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeDirCard({
  firstName,
  lastName,
  position,
  profileImage,
  division,
  email,
  phone,
  hireDate,
  admin,
  currentUser,
  setMessagesUsername,
}) {
  return (
    <Card sx={{ display: "flex", width: "460px", margin: 2 }}>
      <CardMedia
        component="img"
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "256px",
          padding: "15px",
          my: "auto",
        }}
        image={profileImage}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography component="div" variant="body1" color={"primary"}>
            {`${firstName} ${lastName} `}
            {admin ? (
              <span style={{ color: "black", fontWeight: "bold" }}>
                (admin)
              </span>
            ) : null}
          </Typography>
          <Typography
            component="div"
            variant="subtitle2"
            color={"primary.light"}
          >
            {`${position}`}
          </Typography>
          <hr style={{ width: "100%" }} />
          <Typography variant="caption" color={"secondary.dark"}>
            <b>Division: </b>
            {division}
          </Typography>
          <br />
          <Typography variant="caption" color={"secondary.dark"}>
            <b>Email: </b>
            {<a href={`mailto:${email}`}>{email}</a>}
          </Typography>
          <br />
          <Typography variant="caption" color={"secondary.dark"}>
            <b>Phone: </b>
            {phone}
          </Typography>
          <br />
          <Typography variant="caption" color={"secondary.dark"}>
            <b>Hire Date: </b>
            {hireDate}
          </Typography>
          <CardActions>
            <Link
              to={`/profile/${currentUser.id}/messages`}
              className="react-link"
            >
              <Box display={"flex"} flexDirection="row">
                <i
                  className="fa fa-comment"
                  style={{
                    fontSize: "25px",
                    marginRight: "5px",
                    color: "#00539A",
                  }}
                  aria-hidden="true"
                ></i>
                <Typography
                  color={"primary"}
                  variant={"body1"}
                  fontWeight={"bold"}
                >
                  Message
                </Typography>
              </Box>
            </Link>
          </CardActions>
        </CardContent>
      </Box>
    </Card>
  );
}
