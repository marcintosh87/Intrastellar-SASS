import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { DirectUpload } from "@rails/activestorage";

export default function UserAccount({
  currentUser,
  setRefresh,
  refresh,
  setCurrentUser,
}) {
  const [submissionMessage, setSubmissionMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [userPasswordForm, setUserPasswordForm] = useState({
    password: "",
    user_id: currentUser.id,
  });
  const [userPasswordFormConfirmation, setUserPasswordFormConfirmation] =
    useState({
      password: "",
    });
  const [userProfileForm, setUserProfileForm] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    phone: currentUser.phone,
    user_id: currentUser.id,
  });

  const nav = useNavigate();

  const handleUserProfile = (e) => {
    setUserProfileForm({ ...userProfileForm, [e.target.name]: e.target.value });
  };

  const handleUserPassword = (e) => {
    setUserPasswordForm({
      ...userPasswordForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleUserPasswordConfirmation = (e) => {
    setUserPasswordFormConfirmation({
      ...userPasswordFormConfirmation,
      [e.target.name]: e.target.value,
    });
  };
  const handleUserPhoto = (e) => {
    setUserPhoto({ ...userPhoto, [e.target.name]: e.target.files[0] });
  };

  const handleUserPhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("user[profile_image]", userPhoto);

    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
  };

  const handleUserProfileSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfileForm),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setRefresh(refresh + 1);
          setSubmissionMessage(true);
          setDisabled(true);
          setTimeout(() => setSubmissionMessage(false), 3000);
        });
      } else {
        res.json().then((errors) => {
          setErrors("What you entered is invalid");
          console.error(errors);
        });
      }
    });
  };
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });
    setCurrentUser(null);
    nav("/");
  };
  const handleUserPasswordSubmit = (e) => {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPasswordForm),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          handleLogout();
        });
      } else {
        res.json().then((errors) => {
          setErrors("What you entered is invalid");
          console.error(errors);
        });
      }
    });
  };
  //   const Input = styled("input")({
  //     display: "none",
  //   });

  return (
    <div style={{ backgroundColor: "#F7F9FC", minHeight: "100%" }}>
      <Typography color={"secondary"} variant={"h4"}>
        My Profile
      </Typography>
      {/* My profile Section, Details on user */}
      <Card sx={{ my: 5 }}>
        <CardHeader title="User Details" sx={{ backgroundColor: "#F8F8FC" }} />
        <CardContent sx={{ backgroundColor: "#fff" }}>
          <Box display={"Flex"} flexDirection={"row"} flexWrap={"wrap"}>
            <Box display={"flex"} flexDirection={"column"} ml={4}>
              <Avatar
                src={currentUser.profile_image}
                variant="square"
                sx={{ width: "150px", height: "auto" }}
              />
              <Box
                display={"Flex"}
                flexDirection={"row"}
                flexWrap={"wrap"}
                alignItems={"center"}
              >
                {/* <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    name="profile_image"
                    onChange={handleUserPhoto}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                  <Button type="submit" onClick={() => handleUserPhotoSubmit()}>
                    Submit
                  </Button>
                </label> */}
                {/* <form onSubmit={handleUserPhotoSubmit}>
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    name="avatar"
                    onChange={(e) => setUserPhoto(e.target.files[0])}
                  />
                  <input type="submit" />
                </form>
                <Typography variant="caption" color="primary">
                  Change Profile Photo
                </Typography> */}
              </Box>
            </Box>

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
      {/* Update Profile Section */}
      <Typography color={"secondary"} variant={"h4"} mb={5}>
        Update My Profile
      </Typography>
      <Card sx={{ my: 5 }}>
        <CardHeader title="Your Details" sx={{ backgroundColor: "#F8F8FC" }} />
        <CardContent
          sx={{ backgroundColor: "#fff" }}
          component="form"
          onSubmit={handleUserProfileSubmit}
        >
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"left"}
            alignContent={"center"}
            spacing={5}
          >
            <Grid item xs>
              <TextField
                id="update-first-name"
                label="First Name"
                variant="outlined"
                disabled={disabled}
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={
                  userProfileForm != null ? userProfileForm.first_name : ""
                }
                name="first_name"
                onChange={handleUserProfile}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="update-last-name"
                label="Last Name"
                variant="outlined"
                disabled={disabled}
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={userProfileForm.last_name}
                name="last_name"
                onChange={handleUserProfile}
              />
            </Grid>
          </Grid>
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"left"}
            alignContent={"center"}
            spacing={5}
            mt={1}
          >
            <Grid item xs>
              <TextField
                id="update-email"
                label="Email"
                variant="outlined"
                disabled={disabled}
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={userProfileForm.email}
                name="email"
                onChange={handleUserProfile}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="update-phone"
                label="Phone"
                variant="outlined"
                disabled={disabled}
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={userProfileForm.phone}
                name="phone"
                onChange={handleUserProfile}
              />
            </Grid>
          </Grid>
          <CardActions>
            {disabled === true ? (
              <Button onClick={() => setDisabled(false)}>Edit</Button>
            ) : (
              <Button onClick={() => setDisabled(true)}>Cancel</Button>
            )}

            <Button type="submit">Submit</Button>
            {submissionMessage && (
              <Fade in={submissionMessage}>
                <Alert severity="success">
                  Your change has been submitted successfully!
                </Alert>
              </Fade>
            )}
          </CardActions>
        </CardContent>
      </Card>
      {/* change password section */}
      <Typography color={"secondary"} variant={"h4"} mb={5}>
        Change Password
      </Typography>
      <Card sx={{ my: 5 }}>
        <CardHeader title="Your Details" sx={{ backgroundColor: "#F8F8FC" }} />
        <CardContent
          sx={{ backgroundColor: "#fff" }}
          component="form"
          onSubmit={handleUserPasswordSubmit}
        >
          <Grid
            container
            flexDirection={"row"}
            justifyContent={"left"}
            alignContent={"center"}
            spacing={5}
          >
            <Grid item xs>
              <TextField
                id="update-password-1"
                label="Password"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={userPasswordForm.password}
                name="password"
                onChange={handleUserPassword}
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="update-password-2"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { color: "black" },
                }}
                value={userPasswordFormConfirmation.password}
                name="password"
                onChange={handleUserPasswordConfirmation}
              />
            </Grid>
          </Grid>
          <CardActions>
            {userPasswordForm.password ===
            userPasswordFormConfirmation.password ? (
              <Button type="submit">Save</Button>
            ) : null}

            {userPasswordForm.password !==
            userPasswordFormConfirmation.password ? (
              <Alert severity="warning">Passwords do not match</Alert>
            ) : null}
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
