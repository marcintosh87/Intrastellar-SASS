import "./App.css";
import Navbar from "./Navbar";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Newsfeed from "./Newsfeed";

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
  return (
    <div className="App">
      {/* To modify this theme change the props in the theme variable */}
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* Main content Start */}
        <Routes>
          <Route path="/*" element={<Newsfeed />} />
        </Routes>
        {/* Main Content End */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
