import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import clap from "./images/blue-clap.png";

export default function EventCard({
  title,
  content,
  claps,
  image,
  date,
  id,
  refresh,
  setRefresh,
  location,
  time,
  event_date,
  mail_time,
  loading,
}) {
  const [clapsData, setClapsData] = useState({
    claps: claps,
  });

  const handleClaps = (e) => {
    // e.preventDefault();

    fetch(`/event_posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clapsData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setClapsData({
            claps: claps + 1,
          });
          //   setRefresh(refresh + 1);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <>
      {id && (
        <Card sx={{ display: "flex", width: "90%", m: 2, boxShadow: 0 }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 160, borderRadius: 10, m: 1 }}
            image={image}
            alt={title}
          />
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
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
                sx={{ color: "#9B9B9B" }}
                variant="subtitle2"
                align="left"
              >
                {`${date} | ${mail_time} | ${location}`}
              </Typography>
              <Typography
                sx={{ color: "#9B9B9B" }}
                variant="body2"
                align="left"
              >
                {content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                href={`https://outlook.live.com/owa/?path=/calendar/view/Month&rru=addevent&startdt=${event_date}${mail_time}&enddt=20200214T000000Z&subject=${title}+Event&location=${location}&body=${content}`}
                target={"_blank"}
              >
                Add Event to Calendar
              </Button>
              <Button size="small" onClick={handleClaps}>
                <img src={clap} alt="clap-icon" style={{ width: "40%" }} />
                {clapsData.claps}
              </Button>
              {/* <Link to={`/news-article/${id}`} className="react-link"> */}
              <Button href={`/event-article/${id}`} color="primary">
                Read More
              </Button>
              {/* </Link> */}
            </CardActions>
          </Box>
        </Card>
      )}
    </>
  );
}
