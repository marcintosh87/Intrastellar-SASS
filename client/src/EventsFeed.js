import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EventCard from "./EventCard";

export default function EventsFeed({ eventPost }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="section-banner">
        <Typography align="center" variant="h3" color={"#fff"} pt={10}>
          UPCOMING EVENTS
        </Typography>

        <Box sx={{ maxWidth: 700 }} display={"flex"} m={"auto"} mt={10}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label1" color={"secondary"}>
              Month
            </InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              id="demo-simple-select"
              value={age}
              label="Month"
              onChange={handleChange}
              color="info"
              sx={{
                backgroundColor: "#00539A",
                borderRadius: "16px 0% 0% 16px",
              }}
            >
              <MenuItem value={10}>January</MenuItem>
              <MenuItem value={20}>February</MenuItem>
              <MenuItem value={30}>March</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label2" color={"secondary"}>
              Department
            </InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select"
              value={age}
              label="Department"
              onChange={handleChange}
              color="info"
              sx={{
                backgroundColor: "#00539A",
              }}
            >
              <MenuItem value={10}>Human Resources</MenuItem>
              <MenuItem value={20}>Marketing</MenuItem>
              <MenuItem value={30}>Legal</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label3" color={"secondary"}>
              Topic
            </InputLabel>
            <Select
              labelId="demo-simple-select-label3"
              id="demo-simple-select"
              value={age}
              label="Topic"
              color="info"
              onChange={handleChange}
              sx={{
                backgroundColor: "#00539A",
                borderRadius: " 0% 16px  16px 0% ",
              }}
            >
              <MenuItem value={10}>Employee Culture</MenuItem>
              <MenuItem value={20}>Benefits</MenuItem>
              <MenuItem value={30}>Employee Outreach</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <Container sx={{ mt: 10, mb: 10, ml: "5%" }}>
        {eventPost &&
          eventPost.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              time={event.time}
              date={event.date_of_event}
              location={event.event_location}
              content={event.content}
              claps={event.claps}
              image={event.image_post}
              event_date={event.event_date}
              mail_time={event.mail_time}
            />
          ))}
      </Container>
    </>
  );
}
