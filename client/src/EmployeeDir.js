import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EmployeeDirCard from "./EmployeeDirCard";

export default function EmployeeDir({
  users,
  currentUser,
  setMessagesUsername,
}) {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    const searchWord = event.target.value;
    const newSearch = users.filter((value) => {
      return (
        value.last_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.first_name.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    if (searchWord === "") {
      setSearch("");
    } else {
      setSearch(newSearch);
    }
  };
  return (
    <Container>
      <Typography color={"secondary"} variant={"h4"}>
        Employee Directory
      </Typography>
      <Box
        component="form"
        sx={{
          m: 1,
          width: "25ch",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Name"
          variant="outlined"
          size="small"
          onChange={handleSearch}
          InputLabelProps={{
            style: { color: "#00539A" },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {search.length === 0 && users
          ? users.map((user) => (
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
                currentUser={currentUser}
              />
            ))
          : search.map((user) => (
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
                currentUser={currentUser}
              />
            ))}
      </Box>
    </Container>
  );
}
