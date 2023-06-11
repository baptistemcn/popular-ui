import * as React from "react";
import "./App.css";
import { NotFound } from "./components/404";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { ThemeProvider } from "./context/theme";

const Popular = React.lazy(() => import("./components/Popular"));

function App() {
  const [theme, setTheme] = React.useState("light");

  const toogleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <div className="container">
            <Nav toggleTheme={toogleTheme} />
            <React.Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Popular />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </React.Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
