import "./App.css";
import Navbar from "./Navbar";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./Newsfeed";
import NewsArticle from "./NewsArticle";
import { useEffect, useState } from "react";

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
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch(`/news_posts`)
      .then((res) => res.json())
      .then(setNewsPost);
  }, [refresh]);
  return (
    <div className="App">
      {/* To modify this theme change the props in the theme variable */}
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* Main content Start */}
        <Routes>
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
            element={<NewsArticle newsPost={newsPost} />}
          />
        </Routes>
        {/* Main Content End */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
