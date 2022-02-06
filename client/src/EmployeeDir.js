import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EmployeeDirCard from "./EmployeeDirCard";

export default function EmployeeDir({ users }) {
  return (
    <Container>
      <Typography color={"secondary"} variant={"h4"}>
        Employee Directory
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {users &&
          users.map((user) => (
            <EmployeeDirCard
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              profileImage={user.profile_image}
              position={user.position}
              division={user.division.name}
              email={user.email}
              phone={user.phone}
              hireDate={user.hire_date}
              admin={user.administrator}
            />
          ))}
      </Box>
    </Container>
  );
}
