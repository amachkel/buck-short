import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/colorPalette";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Store from "./pages/Store";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
