import "./App.css";
import { NotFound } from "./components/404";
import Popular from "./components/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="light">
        <div className="container">
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
