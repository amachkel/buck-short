import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/colorPalette";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Events from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Store from "./pages/Store";
import BsAdmin from "./pages/BsAdmin";
import Post from "./pages/Post";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:id" element={<Post />} />
          <Route path="/BsAdmin" element={<BsAdmin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
