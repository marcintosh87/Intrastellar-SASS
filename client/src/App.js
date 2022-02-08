import "./App.css";
import Navbar from "./Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./Newsfeed";
import NewsArticle from "./NewsArticle";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import EventsFeed from "./EventsFeed";
import EventArticle from "./EventArticle";
import Login from "./Login";
import UserProfile from "./UserProfile";
import AdminDashboard from "./AdminDashboard";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00539A",
    },
    secondary: {
      main: "#A0ADAE",
      light: "#FFF",
    },
    text: {
      secondary: "#ffffff",
    },
    white: {
      main: "#fff",
    },
  },
});
function App() {
  const [newsPost, setNewsPost] = useState([]);
  const [eventPost, setEventPost] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [newsFilter, setNewsFilter] = useState("news_posts");
  // This allows for the user to remain logged in once authenticated. It must be at the highest level of flow
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          // setAuthenticated(true);
        });
      }
    });
  }, [refresh]);

  // get users
  useEffect(() => {
    fetch("/users").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUsers(user);
          // setAuthenticated(true);
        });
      }
    });
  }, [refresh]);
  // fetch for News Posts
  useEffect(() => {
    fetch(`/${newsFilter}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsPost(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [refresh]);

  // fetch for Event Posts
  useEffect(() => {
    fetch(`/event_posts`)
      .then((res) => res.json())
      .then((data) => {
        setEventPost(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [refresh]);

  if (loading) {
    return (
      <Typography variant="caption" color={"primary"}>
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="caption" color={"primary"}>
        There is an error
      </Typography>
    );
  }
  return (
    <div className="App">
      {/* To modify this theme change the props in the theme variable */}

      {!currentUser ? (
        <Routes>
          <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
          {/* Sign up page doesnt make sense with this model */}
          {/* <Route
            path="/sign-up"
            element={<Signup setCurrentUser={setCurrentUser} />}
          /> */}
        </Routes>
      ) : (
        <ThemeProvider theme={theme}>
          <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

          {/* Main content Start */}
          {loading === true ? null : (
            <Routes>
              <Route
                path="/profile/:id/*"
                element={
                  <UserProfile
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    newsPost={newsPost}
                    eventPost={eventPost}
                    loading={loading}
                    users={users}
                  />
                }
              />
              <Route
                path="/events"
                element={<EventsFeed eventPost={eventPost} />}
              />
              <Route
                path="/event-article/:id"
                element={
                  <EventArticle
                    eventPost={eventPost}
                    loading={loading}
                    currentUser={currentUser}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Newsfeed
                    newsPost={newsPost}
                    setRefresh={setRefresh}
                    refresh={refresh}
                    loading={loading}
                    setNewsFilter={setNewsFilter}
                  />
                }
              />
              <Route
                path="/news-article/:id"
                element={
                  <NewsArticle
                    newsPost={newsPost}
                    loading={loading}
                    currentUser={currentUser}
                  />
                }
              />
            </Routes>
          )}
          {/* Main Content End */}
          <Footer />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
