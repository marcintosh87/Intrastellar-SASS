import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function CommentCard({ comment, user }) {
  const [userData, setUserData] = useState([]);

  useEffect(
    () =>
      fetch(`/users/${user}`)
        .then((res) => res.json())
        .then(setUserData),
    []
  );
  return (
    <Box mr={5} mt={2}>
      <Paper sx={{ borderRadius: 8, backgroundColor: "#F0F0F0" }} elevation={0}>
        <Grid container alignItems={"center"}>
          <Grid item p={2} xs={2}>
            <img
              src={userData.profile_image}
              alt="user"
              style={{ width: "80%", borderRadius: 26 }}
            />
          </Grid>

          <Grid item xs={10}>
            <Typography color={"black"} align="left">
              {comment}
            </Typography>
            <Typography
              variant="caption"
              align="left"
            >{`Posted by: ${userData.first_name}`}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
