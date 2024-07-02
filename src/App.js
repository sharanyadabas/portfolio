import { useState } from "react";
import "./App.css";

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

function App() {
  const [theme, setTheme] = useState(false);

  const lightPalette = {
    primary: { main: "#563410" },
    secondary: { main: "#af8f6e" },
    error: { main: "#b00020" },
    background: { default: "#fbe9d5" },
    text: { primary: "#2a1804", secondary: "#76522e" },
  };

  const darkPalette = {
    primary: { main: "#efcda9" },
    secondary: { main: "#917050" },
    error: { main: "#cf6679" },
    background: { default: "#2a1804" },
    text: { primary: "#fbe9d5", secondary: "#d1ad89" },
  };

  const selectedPalette = theme ? darkPalette : lightPalette;

  const appTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
      primary: selectedPalette.primary,
      secondary: selectedPalette.secondary,
      error: selectedPalette.error,
      background: selectedPalette.background,
      text: selectedPalette.text,
    },
  });

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={appTheme}>
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
