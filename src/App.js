import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Events from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Store from "./pages/Store";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
