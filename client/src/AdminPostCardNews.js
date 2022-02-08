import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import clap from "./images/blue-clap.png";
import mouse from "./images/mouse-click.png";

export default function AdminPostCardNews({
  title,
  date,
  clicks,
  image,
  claps,
  id,
}) {
  return (
    <Card sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
      <CardMedia
        component={"img"}
        image={image}
        sx={{
          width: "150px",
          height: "100px",

          padding: "15px",
          my: "auto",
        }}
      />
      <Stack>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
        <CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <Typography variant="subtitle2" color={"secondary"}>
              {date}
            </Typography>
            <img
              src={clap}
              alt="clap-icon"
              style={{ width: 20, marginLeft: 10 }}
            />
            <Typography color={"secondary"}>{claps}</Typography>
            <img
              src={mouse}
              alt="mouse-icon"
              style={{ width: 14, marginLeft: 10 }}
            />
            <Typography color={"secondary"}>{clicks}</Typography>
            <Link to={`/event-article/${id}`} className="react-link">
              <Button>Read</Button>
            </Link>
            <Button>Edit</Button>
            <Button color="error">Delete</Button>
          </CardActions>
        </CardActionArea>
      </Stack>
    </Card>
  );
}
