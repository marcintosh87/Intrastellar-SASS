import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, Route, Routes } from "react-router-dom";
import AdminNewsFeed from "./AdminNewsFeed";
import AdminEventsFeed from "./AdminEventsFeed";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    //   legend: {
    //     position: 'top' as const,
    //   },
    title: {
      display: true,
      text: "Employee Engagement 2021",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Clicks",
      data: labels.map(() => faker.datatype.number({ min: 0 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Claps",
      data: labels.map(() => faker.datatype.number({ min: 0 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export default function AdminDashboard({
  currentUser,
  setRefresh,
  refresh,
  setCurrentUser,
  newsPost,
  eventPost,
}) {
  return (
    <Container>
      <Typography color={"secondary"} variant={"h4"}>
        Admin Dashboard
      </Typography>
      <Line options={options} data={data} />
      <Typography color={"secondary"} variant={"h4"} mt={3}>
        Posts
      </Typography>
      <Stack mt={3}>
        <Box
          component={"nav"}
          display={"flex"}
          flexDirection={"row"}
          alignContent={"center"}
        >
          <Link
            to={`/profile/${currentUser.id}/admin-dashboard`}
            className="react-link"
          >
            <Button>Newsfeed</Button>
          </Link>
          <Link
            to={`/profile/${currentUser.id}/admin-dashboard/a-events`}
            className="react-link"
          >
            <Button>Events</Button>{" "}
          </Link>

          <Button>Make a Post</Button>
        </Box>
        <Stack>
          <Routes>
            <Route path="/" element={<AdminNewsFeed newsPost={newsPost} />} />
            <Route
              path="a-events"
              element={<AdminEventsFeed eventPost={eventPost} />}
            />
            <Route path="a-post" />
          </Routes>
        </Stack>
      </Stack>
    </Container>
  );
}
