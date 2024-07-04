import React from "react";
import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ThemeContext from "./ThemeContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#25326a" },
          secondary: { main: "#818eda" },
          background: { default: "#f5f7fa" },
          text: { primary: "#0f121f", secondary: "#e0e3f0" },
        }
      : {
          primary: { main: "#95a2da" },
          secondary: { main: "#25327e" },
          background: { default: "#05070a" },
          text: { primary: "#e0e3f0", secondary: "#0f121f" },
        }),
  },
});

function App() {
  const [mode, setMode] = useState("dark");

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Router>
      <ThemeContext.Provider value={{ mode, setMode }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
