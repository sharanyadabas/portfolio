import { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState(false);

  const lightPalette = {
    primary: { main: "#6200ee" },
    secondary: { main: "#018786" },
    error: { main: "#b00020" },
    background: { default: "#ffffff", paper: "#f5f5f5" },
    text: { primary: "#1a1a1a", secondary: "#333333" },
  };

  const darkPalette = {
    primary: { main: "#bb86fc" },
    secondary: { main: "#03dac6" },
    error: { main: "#cf6679" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#e0e0e0" },
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={appTheme}>
        <div>
          <ResponsiveAppBar />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
