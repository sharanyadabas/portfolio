import React from "react";
import Box from "@mui/material/Box";

function ThemeBox({ children, ...props }) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        height: "100vh",
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default ThemeBox;
