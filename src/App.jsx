import "./App.css";
import Popular from "./components/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="light">
        <div className="container">
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="*" element={<Popular />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
