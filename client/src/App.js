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

  // fetch for News Posts
  useEffect(() => {
    fetch(`/news_posts`)
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
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* Main content Start */}
        {loading === true ? null : (
          <Routes>
            <Route
              path="/events"
              element={<EventsFeed eventPost={eventPost} />}
            />
            <Route
              path="/event-article/:id"
              element={<EventArticle eventPost={eventPost} loading={loading} />}
            />
            <Route
              path="/"
              element={
                <Newsfeed
                  newsPost={newsPost}
                  setRefresh={setRefresh}
                  refresh={refresh}
                />
              }
            />
            <Route
              path="/news-article/:id"
              element={<NewsArticle newsPost={newsPost} loading={loading} />}
            />
          </Routes>
        )}
        {/* Main Content End */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
