import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import clap from "./images/blue-clap.png";

export default function NewsCard({ title, content, claps, image, date }) {
  return (
    <Card sx={{ display: "flex", width: 540, m: 2, boxShadow: 0 }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 220, borderRadius: 10 }}
        image={image}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 500 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h6"
            align="left"
            sx={{ color: "#5F5F5F" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: "#5F5F5F" }}
            variant="subtitle2"
            align="left"
          >
            {date}
          </Typography>
          <Typography sx={{ color: "#5F5F5F" }} variant="body2" align="left">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <img src={clap} alt="clap-icon" style={{ width: "40%" }} />
            {claps}
          </Button>
          <Button color="primary">Read More</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
