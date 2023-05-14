import * as React from "react";
import "./App.css";
import { NotFound } from "./components/404";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Popular = React.lazy(() => import("./components/Popular"));

class App extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <Router>
        <div className={this.state.theme}>
          <div className="container">
            <Nav theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Popular />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
